//error middle ware is basically the last to catch up all the errors(app.js  m sabse last m rakhna h isko)

class ErrorHandler extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

//err-an eror object
export const errorMiddleware = (err, req, res, next) => {
  err.message = err.message || "Internal Server Error";
  err.statusCode = err.statusCode || 500;

  //duplicate values at the time of entering details
  if (err.code === 11000) {
    const message = `Duplicate ${Object.keys(err.keyValue)} Entered`,
      err = new ErrorHandler(message, 400);
  }


  if (err.name === "CastError") {
    const message = `Invalid ${err.path}`,
      err = new ErrorHandler(message, 400);
  }

  //JS map method and ternary operator used here
  const errorMessage = err.errors
    ? Object.values(err.errors)
        .map((error) => error.message)
        .join(" ")
    : err.message;//jo mann kr rha vo msg bhej dega(Ye typically server-side ya framework-generated errors ke liye hota hai)

  return res.status(err.statusCode).json({
    success: false,
    // message: err.message,
    message: errorMessage,//upar jo funtion bnaya h vo hi bhej de rhe h yha pe
  });
};

export default ErrorHandler;