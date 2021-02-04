const pool = require('../config/db.config');
const { getAllCategoriesModel } = require('../models/categories.model');

const getAllCategories = async (req, res) => {
  try {
    const [rows] = await pool.promise().query(getAllCategoriesModel);
    res.status(200).json(rows);
  } catch(error) {
    console.log(new Date(), req.method, req.originalUrl, error.message);
    res.status(500).send('server error');
  }
}

module.exports = { 
  getAllCategories
}