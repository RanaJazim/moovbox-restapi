const express = require("express");
const controller = require("../controllers/package_detail_controller");

const router = express.Router();

router.get("/", controller.fetchingPackageDetail);
router.post("/create", controller.createPackageDetail);

module.exports = router;