import { Request, Response } from "express";

export interface IReqRes {
    request: Request;
    response: Response;
}

export interface IImportCategory{
    name: string,
    description: string;
}

export interface ICreateCarProps {
    name: string;
    description: string;
    daily_rate: number;
    available: boolean;
    licence_plate: string;
    fine_amount: number;
    brand: string;
    category_id: string;
}