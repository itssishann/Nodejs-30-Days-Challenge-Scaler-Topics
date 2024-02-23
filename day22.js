require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const  {createProduct} =  require("./models/product")
const {getAllProducts} =   require ("./models/product")
const {updateProduct}  =  require("./models/product")
const {deleteProduct}  =  require("./models/product")
const app = express();
const PORT = process.env.PORT || 3000;


mongoose.connect(`${process.env.MONGO_URL}Day22`)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });


app.use(bodyParser.json());


app.post('/products', async (req, res) => {
  try {
    const product = await createProduct(req.body);
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/products', async (req, res) => {
  try {
    const products = await getAllProducts();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.put('/products/:id', async (req, res) => {
  try {
    const updatedProduct = await updateProduct(req.params.id, req.body);
    res.json(updatedProduct);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.delete('/product/:id', async (req, res) => {
  try {
    const deletedProduct = await deleteProduct(req.params.id);
    res.json(deletedProduct);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
