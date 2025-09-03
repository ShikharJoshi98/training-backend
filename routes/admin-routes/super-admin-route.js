const express = require('express');
const { superAdminController } = require('../../controllers');

const router = express.Router();

router.get('/getInstitutes', superAdminController.fetchInstitutes);
router.delete('/deleteInstitute/:id', superAdminController.deleteInstitutes);
router.patch('/updateInstitute/:id', superAdminController.editInstitute);

module.exports = router;