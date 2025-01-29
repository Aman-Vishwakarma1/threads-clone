const errorHandler = (err: any, _: any, res: any, __: any) => {
  const errorMsg = err.message || `Internal Server Error`;
  const statusCode = err.statuscode || `500`;
  res.status(statusCode).json({
    message: errorMsg,
    stack: process.env.NODE_ENV === "production" ? `Invalid` : err.stack,
    status: false,
  });
};
export default errorHandler;
