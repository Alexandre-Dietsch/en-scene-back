const router = require('express').Router();
const registration = require('./registration');
const login = require('./login');

router.use('/registration', registration);
router.use('/login', login)

module.exports = router;