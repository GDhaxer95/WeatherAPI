import { ERROR_CODES } from "../Constants/errorCodes";
import { errorLogger } from "../Logger/logger";


export class CustomError extends Error {    
    errorcode: number;
    constructor(message: string, errorcode: number) {
        super(message);
        this.name = ERROR_CODES.CUSTOM_ERROR_NAME;
        this.errorcode = ERROR_CODES.CUSTOM_ERROR_CODE;
        errorLogger.error(this.message);
        
    }
}  