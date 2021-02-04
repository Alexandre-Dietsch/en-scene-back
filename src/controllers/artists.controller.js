const pool = require('../config/db.config');
const { artistsByCategoryModel } = require('../models/artists.model');

const getArtistsByCategory = async (req, res) => {
  try {
    const { idcategory } = req.params;
    const [rows] = await pool.promise().query(artistsByCategoryModel, [idcategory]);
    res.status(200).json(rows);

  } catch(error) {
    console.log(new Date(), req.method, req.originalUrl, error.message);
    res.status(500).send('server error');
  }
}

module.exports = { 
  getArtistsByCategory
}