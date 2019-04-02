const router = require("express").Router();
const Users = require("./users-model.js");
const bcrypt = require("bcryptjs");

router.get("/", restricted, async (req, res) => {
  try {
    const users = await Users.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "error finding users" });
  }
});

async function restricted(req, res, next) {
  const { username, password } = req.headers;
  try {
    if (username && password) {
      const user = await Users.findBy({ username }).first();
      if (user && bcrypt.compareSync(password, user.password)) {
        next();
      } else {
        res.status(401).json({ message: "You shall not pass!" });
      }
    } else {
      res.status(406).json({ message: "please provide credentials" });
    }
  } catch (error) {
    res.status(500).json({ message: "please provide credentials" });
  }
}

// function restricted(req, res, next) {
//   const { username, password } = req.headers;

//   if (username && password) {
//     Users.findBy({ username })
//       .first()
//       .then(user => {
//         if (user && bcrypt.compareSync(password, user.password)) {
//           next();
//         } else {
//           res.status(401).json({ message: "You cannot pass!" });
//         }
//       })
//       .catch(error => {
//         res.status(500).json(error);
//       });
//   } else {
//     res.status(401).json({ message: "please provide credentials" });
//   }
// }

module.exports = router;
