const express = require("express");
const { AdminRoute, AdminAuthRoute, SuperAdminRoute } = require("./admin-routes");
const {tenantRoute} = require("./tenant-routes");

const router = express.Router();

//admin
router.use('/admin', AdminRoute);
router.use('/admin-auth', AdminAuthRoute);

//tenant-frontend
router.use('/tenant', tenantRoute);

//superAdmin
router.use('/super-Admin', SuperAdminRoute);

module.exports = router;