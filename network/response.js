exports.success = (request, response, message, status) => {
  let statusCode = status;
  let statusMessage = message || "";
  response
    .status(statusCode)
    .send({ error: false, status: statusCode || 200, body: message });
};
exports.error = (request, response, message, status) => {
  let statusCode = status;
  let statusMessage = message || "Internal server err";
  response.status(statusCode).send({
    error: false,
    status: statusCode || 500,
    body: message,
  });
};
