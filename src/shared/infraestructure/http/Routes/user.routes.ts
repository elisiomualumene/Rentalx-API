import { Router } from "express";
import { CreateUserController } from "../../../../modules/accounts/useCases/createUser/CreateUserController";
import { ListUserController } from "../../../../modules/accounts/useCases/listUser/ListUserController";
import { DeleteUserController } from "../../../../modules/accounts/useCases/deleteUser/DeleteUserController";
import { UpdateUserAvatarController } from "../../../../modules/accounts/useCases/updateUserAvatar/UpdateUserAvatarController";
import upload from "../../../../config/upload"
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import multer from 'multer';

const userRoutes = Router();

const uploadAvatar = multer(upload("./tmp/avatar"));

const createUserController = new CreateUserController();
const listUserController = new ListUserController();
const deleteUserController = new DeleteUserController();
const updateUserAvatarController = new UpdateUserAvatarController();

userRoutes.post("/", createUserController.handle)
userRoutes.get("/", listUserController.handle)
userRoutes.delete("/:id", deleteUserController.handle)
userRoutes.patch("/avatar", ensureAuthenticated, uploadAvatar.single("avatar") ,updateUserAvatarController.handle)

export {userRoutes};