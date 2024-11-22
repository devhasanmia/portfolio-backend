import { NextFunction, Request, Response } from "express";
import AppError from "../errors/AppError";
import jwt, { JwtPayload } from "jsonwebtoken";
import config from "../config";
import Admin from "../modules/seeds/seed.model";

declare global {
  namespace Express {
    interface Request {
      admin?: JwtPayload;
    }
  }
}

const authenticate = () => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const authHeader = req.headers.authorization;
      if (!authHeader || !authHeader.startsWith("Bearer ")) {
        throw new AppError(401, "You are not authorized");
      }
      const token = authHeader.split(" ")[1];
      const secret = config.JWT_SECRET;
      if (!secret) {
        throw new Error("JWT secret is not defined in configuration.");
      }
      const decoded = jwt.verify(token, secret) as JwtPayload;
      req.admin = decoded;
      const user = await Admin.findById(req.admin.id);
      if (!user) {
        throw new AppError(401, "You are not authorized");
      }
      next();
    } catch (error) {
      if (error instanceof jwt.JsonWebTokenError) {
        next(new AppError(401, "Invalid or expired token"));
      } else {
        next(error);
      }
    }
  };
};

export default authenticate;
