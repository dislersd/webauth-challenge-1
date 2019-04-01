const router = require("express").Router();
const bcrypt = require("bcryptjs");
const Users = require("../users/users-model.js");

router.post("/", async (req, res) => {
  try {
    let user = req.body;
    user.password = bcrypt.hashSync(user.password, 4);
    const saved = await Users.add(user);
    res.status(201).json(saved);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
