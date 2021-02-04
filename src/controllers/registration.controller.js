const pool = require('../config/db.config');
const bcrypt = require('bcryptjs');
const { userAccountsModel, createUserAccountModel } = require('../models/userAccounts.model');

const getUserAccounts = async (req, res) => {
  try {
    const [rows] = await pool.promise().query(userAccountsModel);
    res.status(200).json(rows);

  } catch(error) {
    console.log(new Date(), req.method, req.originalUrl, error.message);
    res.status(500).send('server error');
  }
}

const createUserAccount = async (req, res) => {
  const { fk_user_role, pseudo, email, password } = req.body;
  const hash = await bcrypt.hash(password, 10);
  try {
    await pool.promise().query(createUserAccountModel, [fk_user_role, pseudo, email, hash]);
    res.status(200).json({ accountCreated: true, message: 'success, accout created' });  

  } catch(error) {
    console.log(new Date(), req.method, req.originalUrl, error.message);
    res.status(500).send('server error');
  }
}

module.exports = {
  getUserAccounts,
  createUserAccount
}