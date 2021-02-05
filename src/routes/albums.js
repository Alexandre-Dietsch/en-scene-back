const router = require('express').Router();
const { getAlbumsByArtist } = require('../controllers/albums.controller');

router.get('/:id', getAlbumsByArtist);

module.exports = router;