import { CustomError } from "./CustomError";

export class DatabaseError extends CustomError {

    constructor(message: string, errorcode: number){
        super(message, 2001);
        this.name="DatabaseError";
    }
};