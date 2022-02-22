

const getAllProductsStatic = async (req, res) => {
  // 에러 퉤
  throw new Error('testing error')
  res.status(200).json({ msg: 'products testing route' })
}

const getAllProducts = async (req, res) => {
  res.status(200).json({ msg: 'products route' })
}

module.exports = {
  getAllProducts,
  getAllProductsStatic
}