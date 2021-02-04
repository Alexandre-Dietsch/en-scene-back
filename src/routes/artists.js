const router = require('express').Router();

router.get('/:idcategory', getArtistsByCategory);

module.exports = router;