import { Request, Response } from "express";

export interface IReqRes {
    request: Request;
    response: Response;
}

export interface IImportCategory{
    name: string,
    description: string;
}