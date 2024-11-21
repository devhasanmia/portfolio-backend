import { NextFunction, Request, Response } from "express";
import { TAdminAuth } from "./auth.interface";
import { adminAuthService } from "./auth.service";

export const adminLogin = async (req: Request, res: Response, next: NextFunction) => {
    try {
        
        const { email, password } = req.body as TAdminAuth;
        const accessToken = await adminAuthService.login({ email, password });
        res.status(200).json({
            message: "Logged in successfully",
            token: accessToken,
        });
    } catch (error: any) {
        next(error);
    }
};

