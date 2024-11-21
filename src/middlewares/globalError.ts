import { ZodError } from 'zod'; // Import ZodError for type checking
import { Request, Response, NextFunction } from 'express';

export const globalError = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = err.statusCode || 500;

  const errorResponse: any = {
    status: "error",
    message: err.message || "Internal Server Error",
    ...(process.env.NODE_ENV === "development" && { stack: err.stack }),
  };
  if (err instanceof ZodError) {
    const errorMessages = err.errors.map(e => {
      return {
        path: e.path.join("."),
        message: e.message,
      }
    });
    res.status(400).json({
      success: false,
      message: "Validation failed",
      errors: errorMessages,
    });
  }
  res.status(statusCode).json(errorResponse);
};
