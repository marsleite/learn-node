import { Router } from "express";
import { UserController } from "../resources/user/user.controller";

const userRouter = Router();

userRouter.get('/', new UserController().createUser);

export default userRouter;