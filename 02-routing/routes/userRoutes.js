const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("User Home page");
});
// users/auth(everything mentioned in server.js)
router.get("/auth", (req, res) => {
  res.send("User auth page");
});
router.get("/:id", (req, res) => {
  res.send(`user id : ${req.params.id}`);
});

module.exports = router;
