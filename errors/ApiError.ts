import { CustomError } from "./CustomError";

export class ApiError extends CustomError {
    constructor(message: string, errorcode: number){
        super(message, 2000);
        this.name="ApiError";
    }
};