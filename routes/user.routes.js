const express = require("express");
const router = express.Router();

// GET users
router.get("/", (req, res) => {
  res.json([
    { id: 1, name: "Vishal" },
    { id: 2, name: "Rahul" },
    { id: 3, name: "Yash" }
  ]);
});

// POST user
router.post("/", (req, res) => {
  const user = req.body;
  res.status(201).json({
    message: "User created",
    data: user
  });
});

module.exports = router;
