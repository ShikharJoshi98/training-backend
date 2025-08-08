const express = require("express");
const { AdminRoute, AdminAuthRoute } = require("./admin-routes");

const router = express.Router();

router.use('/admin', AdminRoute);
router.use('/admin-auth', AdminAuthRoute);

module.exports = router;