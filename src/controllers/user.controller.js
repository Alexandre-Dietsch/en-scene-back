const pool = require('../config/db.config');
const { getUserInfoModel } = require('../models/userInfo.model');

const getUserInfo = async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await pool.promise().query(getUserInfoModel, [id]);
    res.status(200).json(rows);
  } catch(error) {
    console.log(new Date(), req.method, req.originalUrl, error.message);
    res.status(500).send('server error');
  }
}

module.exports = {
  getUserInfo
}