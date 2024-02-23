const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  quantity: Number,
});

const Product = mongoose.model('Product', productSchema);

async function createProduct(product) {
  try {
    const createdProduct = await Product.create(product);
    return createdProduct;
  } catch (error) {
    throw new Error('Failed to create product');
  }
}

async function getAllProducts() {
  try {
    const products = await Product.find({});
    return products;
  } catch (error) {
    throw new Error('Failed to retrieve products');
  }
}

async function updateProduct(productId, updatedProduct) {
  try {
    const result = await Product.findByIdAndUpdate(productId, updatedProduct, { new: true });
    if (!result) {
      throw new Error('Product not found');
    }
    return result;
  } catch (error) {
    throw new Error('Failed to update product');
  }
}
//PRODUCT DELETE 
async function deleteProduct(productId) {
  try {
    const result = await Product.findByIdAndDelete(productId);
    if (!result) {
      throw new Error('Product not found');
    }
    return result;
  } catch (error) {
    throw new Error('Failed to delete product');
  }
}

module.exports = {
  createProduct,
  getAllProducts,
  updateProduct,
  deleteProduct
};
