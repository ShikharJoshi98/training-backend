const express = require("express");
const { AdminRoute } = require("./admin-routes");

const router = express.Router();

router.use('/admin', AdminRoute);

module.exports = router;