const router = require('express').Router();

const registration = require('./registration');
const login = require('./login');
const categories = require('./categories');
const userInfo = require('./user');
const artists = require('./artists');
const albums = require('./albums');

router.use('/registration', registration);
router.use('/login', login);
router.use('/categories', categories);
router.use('/user', userInfo);
router.use('/category', artists);
router.use('/albums', albums);

module.exports = router;