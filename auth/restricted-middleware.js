// module.exports = async function restricted(req, res, next) {
//   const { username, password } = req.headers;
//   try {
//     if (username && password) {
//       const user = await Users.findBy({ username }).first();
//       if (user && bcrypt.compareSync(password, user.password)) {
//         next();
//       } else {
//         res.status(401).json({ message: "You shall not pass!" });
//       }
//     } else {
//       res.status(406).json({ message: "please provide credentials" });
//     }
//   } catch (error) {
//     res.status(500).json({ message: "please provide credentials" });
//   }
// }

module.exports = async function restricted(req, res, next) {
  try {
    if (req && req.session && req.session.user) {
      next();
    } else {
      res.status(401).json({ message: 'invalid credentials' })
    }
  } catch (error) {
    res.status(500).json({ message: 'you broke it' })
  }
  // const { username, password } = req.headers;
  // try {
  //   if (username && password) {
  //     const user = await Users.findBy({ username }).first();
  //     if (user && bcrypt.compareSync(password, user.password)) {
  //       next();
  //     } else {
  //       res.status(401).json({ message: "You shall not pass!" });
  //     }
  //   } else {
  //     res.status(406).json({ message: "please provide credentials" });
  //   }
  // } catch (error) {
  //   res.status(500).json({ message: "please provide credentials" });
  // }
}
