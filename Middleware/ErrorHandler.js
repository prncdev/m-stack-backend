// Since these will be our middleware functions which will handle server errors the functions will need to have 4 parameters.
const errorHandler = function (error, req, res, next) {
  const statusCode = res.statusCode || 500;

  res.status(statusCode);

  res.json({
    message: error.message,
    stack: process.env.ENV === 'production' ? null : error.stack,
  });

  next();
};

module.exports = {
  errorHandler
}
