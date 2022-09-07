import {Request, Response } from "express";
import { CreateCategoryUseCase } from "./createCategoryUseCase";

class CreateCategoryController {

    constructor(private createCategoryUseCase: CreateCategoryUseCase){}

    handle(request: Request, response: Response): Response{
    const { name, description } = request.body;

    this.createCategoryUseCase.execute({name, description});

    return response.status(201).json({status: true, message: "category was added!"});
    }
}

export { CreateCategoryController };