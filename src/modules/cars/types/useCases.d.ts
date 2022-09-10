import { Request, Response } from "express";

interface IReqRes {
    request: Request;
    response: Response;
}

interface IImportCategory{
    name: string,
    description: string;
}