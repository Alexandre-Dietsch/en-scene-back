const router = require('express').Router();
const { getUserInfo } = require('../controllers/user.controller');

router.get('/:id', getUserInfo);

module.exports = router;