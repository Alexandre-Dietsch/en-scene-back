const router = require('express').Router();
const { getUserAccounts, createUserAccount } = require('../controllers/registration.controller'); 

router.get('/', getUserAccounts);
router.post('/', createUserAccount);

module.exports = router;