const pool = require('../config/db.config');
const bcrypt = require('bcryptjs');

const { verifyEmailExist } = require('../models/verifyEmailExist.model');

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const [rows] = await pool.promise().query(verifyEmailExist, [email]);
    const { id, pseudo } = rows[0];

    const match = await bcrypt.compare(password, rows[0].password);
    if(match) {
      res.status(200).json({ id: id, pseudo: pseudo, email: email, connected: true })
    } else {
      res.status(403).json('wrong password');
    }

  } catch(error) {
    console.log(new Date(), req.method, req.originalUrl, error.message);
    res.status(500).send('server error');
  }
}

module.exports = {
  login
}