const express = require("express");
const { About } = require("../Controller/MainController");
const router = express.Router();

router.route("/About").post(About);

module.exports = router;
