const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const { getProductsPopulatedWithCategory } = require('./models/product'); // fixed issue
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

mongoose.connect(`${process.env.MONGO_URL}Day22`)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });


app.get('/products', async (req, res) => {
  try {
    const products = await getProductsPopulatedWithCategory();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
