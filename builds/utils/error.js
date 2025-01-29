"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class customError extends Error {
    constructor(errMsg, statuscode) {
        super(errMsg);
        this.statuscode = statuscode;
        this.statuscode = statuscode;
        Error.captureStackTrace(this, this.constructor);
    }
}
exports.default = customError;
