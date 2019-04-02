const router = require("express").Router();
const bcrypt = require('bcryptjs')
const Users = require("../users/users-model.js");

router.post("/", async (req, res) => {
  try {
    let { username, password } = req.body;
    const user = await Users.findBy({ username }).first();
    if (user && bcrypt.compareSync(password, user.password)) {
      res.status(200).json({ message: `welcome ${user.username}!`});
    } else {
      res.status(401).json({ message: 'invalid credentials' });
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
