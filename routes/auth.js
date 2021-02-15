const router = require('express').Router();
const registerController = require('../controllers/authControllers/register');
const loginController = require('../controllers/authControllers/login');

router.post('/register', registerController.register);
router.post('/login', loginController.login);
// sfsdf
module.exports = router;