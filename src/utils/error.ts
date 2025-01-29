class customError extends Error {
  constructor(errMsg: string, public statuscode: Number) {
    super(errMsg);
    this.statuscode = statuscode;
    Error.captureStackTrace(this, this.constructor);
  }
}

export default customError;
