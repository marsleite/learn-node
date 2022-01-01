import { Request, Response } from "express";

export class UserController {
    async createUser(req: Request, res: Response) {
      return res.status(200).json({ message: 'chegando no controller' });
    }
}