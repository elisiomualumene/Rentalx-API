import { Router } from "express";
import { CreateUserController } from "../modules/accounts/useCases/createUser/CreateUserController";
import { ListUserController } from "../modules/accounts/useCases/listUser/ListUserController";
import { DeleteUserController } from "../modules/accounts/useCases/deleteUser/DeleteUserController";

const userRoutes = Router();

const createUserController = new CreateUserController();
const listUserController = new ListUserController();
const deleteUserController = new DeleteUserController()

userRoutes.post("/", createUserController.handle)
userRoutes.get("/", listUserController.handle)
userRoutes.delete("/:id", deleteUserController.handle)

export {userRoutes};