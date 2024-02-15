import { Request, Response, NextFunction } from "express";
import { CustomError } from "../Errors/CustomError";


export function errorHandler(err: Error, req: Request, res: Response, next: NextFunction) {
    if(err instanceof CustomError) {
        res.status(500).json({
            error: err.message,
            errorCode: err.errorcode,
        });
    } else {
        res.status(500).json({
            error: "Erreur Innatendue"
        });
    }
}