import { NextFunction, Request, Response } from "express";
import { JsonWebTokenError } from "jsonwebtoken";
import { ZodError } from "zod";
import { AppError } from "../errors/AppError.error";

export const handleErrors = (error: unknown, req: Request, res: Response, next: NextFunction): Response => {

    if (error instanceof AppError) {
        return res.status(error.statusCode).json({message: error.message});
    }

    if (error instanceof JsonWebTokenError) {
        return res.status(401).json({message: error.message});
    }

    if (error instanceof ZodError) {
        return res.status(400).json({message: error.flatten().fieldErrors});
    }

    console.log(error);
    return res.status(500).json({message: "Internal server error"});
};