const router = require('express').Router();

const registration = require('./registration');
const login = require('./login');
const categories = require('./categories');

router.use('/registration', registration);
router.use('/login', login);
router.use('/categories', categories);

module.exports = router;