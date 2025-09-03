const express = require('express');
const { tenantController } = require('../../controllers');

const router = express.Router();

//domain
router.get('/resolve-domain', tenantController.getDomain);

//enquiry
router.post('/addStudentEnquiry', tenantController.createEnquiry);

//courses
router.get('/getTopCourses/:id', tenantController.getTopCourses);

module.exports = router;