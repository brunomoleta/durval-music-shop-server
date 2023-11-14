import { Request, Response } from "express";
import { loginService } from "../services/session.service";

export const loginController = async (req: Request, res: Response) => {
    const token: string = await loginService(req.body);

    return res.status(200).json({token});
};