
function getProductStatistics() {
    return db.products.aggregate([
      {
        $group: {
          _id: null,
          totalProducts: { $sum: 1 },
          averagePrice: { $avg: "$price" },
          highestQuantity: { $max: "$quantity" }
        }
      }
    ]).toArray()[0];
  }
module.exports = {
    getProductStatistics
}