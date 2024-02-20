const express = require('express');
const mongoose = require('mongoose');
const averageAgeOfUsers = require('./controllers/averageAge');
require("dotenv").config();
const app = express();

mongoose.connect(`${process.env.MONGO_URL}day17-DB`).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Error connecting to MongoDB:', err.message);
});

app.get('/average-age', averageAgeOfUsers);

const PORT = process.env.PORT || 4040;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
