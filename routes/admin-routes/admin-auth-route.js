const express = require('express');
const { authController } = require('../../controllers');
const verifyToken = require('../../middlewares/verifyToken');

const router = express.Router();

//admin-auth
router.get('/check-auth', verifyToken, authController.checkAuth);
router.post('/registerInstitute', authController.registerInstitue);
router.post('/registerSuperAdmin', authController.registerSuperAdmin);
router.post('/login', authController.login);
router.post('/logout', authController.logout);

module.exports = router;
