"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errorHandler = (err, _, res, __) => {
    const errorMsg = err.message || `Internal Server Error`;
    const statusCode = err.statuscode || `500`;
    res.status(statusCode).json({
        message: errorMsg,
        stack: process.env.NODE_ENV === "production" ? `Invalid` : err.stack,
        status: false,
    });
};
exports.default = errorHandler;
