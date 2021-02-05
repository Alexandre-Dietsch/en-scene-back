const pool = require('../config/db.config');
const { getAlbumsModel } = require('../models/album.model');

const getAlbumsByArtist = async (req, res) => {
  try {
    const { id } = req.params
    const [rows] = await pool.promise().query(getAlbumsModel, [id]);
    res.status(200).json(rows);
  } catch(error) {
    console.log(new Date(), req.method, req.originalUrl, message.error);
    res.status(500).send('server error');
  }
}

module.exports = {
  getAlbumsByArtist
}