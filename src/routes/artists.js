const router = require('express').Router();
const { getArtistsByCategory } = require('../controllers/artists.controller');

router.get('/:idcategory', getArtistsByCategory);

module.exports = router;