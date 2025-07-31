const express = require('express');
const { companyController } = require('../../controllers');

const router = express.Router();

router.post('/addCompanyInfo', companyController.addCompanyInfo);
router.post('/addSocialInfo', companyController.addSocialLinks);

module.exports = router;