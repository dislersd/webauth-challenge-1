const router = require("express").Router();
const bcrypt = require('bcryptjs')
const Users = require("../users/users-model.js");

const login = router.post("/", async (req, res) => {
  try {
    let { username, password } = req.body;
    const user = await Users.findBy({ username }).first();
    if (user && bcrypt.compareSync(password, user.password)) {
      req.session.user = user;
      res.status(200).json({ 
        message: `welcome ${user.username}!`,
        cookie: req.session.user
      });
    } else {
      res.status(401).json({ message: 'invalid credentials' });
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = login;
