const express = require('express');
const app = express();
const PORT = process.env.PORT || 4040;
function positiveIntegerHandler(req, res, next) {
  const number = parseInt(req.query.number);

  if (Number.isInteger(number) && number > 0) {
    res.status(200).json({
      success: true,
      message: 'Success! Valid positive integer received.',
      data: {
        number: number,
      },
    });
  } else {
    next(new Error('Invalid positive integer. Please provide a positive integer.'));
  }
}

function errorHandlerMiddleware(err, req, res, next) {
  res.status(400).json({
    success: false,
    error: err.message,
    message: 'Bad Request',
  });
}
app.use(errorHandlerMiddleware);

app.get('/positive', positiveIntegerHandler);

app.listen(PORT, () => {
  console.log(`Server Listening at --> ${PORT}`);
});
