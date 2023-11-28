import { Request, Response } from "express";
import { loginService } from "../services/session.service";
import { loginReturn } from "../interfaces/session.interface";

export const loginController = async (req: Request, res: Response) => {
  const { token } = await loginService(req.body);

  return res.status(200).json({ token });
};
