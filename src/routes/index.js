const router = require('express').Router();

const registration = require('./registration');
const login = require('./login');
const categories = require('./categories');
const userInfo = require('./user');

router.use('/registration', registration);
router.use('/login', login);
router.use('/categories', categories);
router.use('/user', userInfo);

module.exports = router;