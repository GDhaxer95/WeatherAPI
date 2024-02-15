import { ERROR_CODES } from "../Constants/errorCodes";
import { CustomError } from "./CustomError";
import { errorLogger } from "../Logger/logger";


export class ApiError extends CustomError {    
    constructor(message: string) {
        super(message, ERROR_CODES.API_ERROR_CODE);
        this.name = ERROR_CODES.API_ERROR_NAME;
        errorLogger.error(this.message + " - " + this.errorcode);
    }
}  