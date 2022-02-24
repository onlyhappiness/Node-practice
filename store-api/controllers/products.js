const Product = require('../models/product');

const getAllProductsStatic = async (req, res) => {
  // 에러 퉤
  // throw new Error('testing error');

  // name이 vase table인 거 찾기
  const products = await Product.find({ name: 'vase table' });
  res.status(200).json({ products, nbHits: products.length });
};

const getAllProducts = async (req, res) => {
  res.status(200).json({ msg: 'products route' });
};

module.exports = {
  getAllProducts,
  getAllProductsStatic,
};
