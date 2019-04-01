const router = require('express').Router();
const db = require('./users-model.js')

router.get('/', async (req, res) => {
  try {
    const users = await db.find();
    res.status(200).json(users)
  } catch (error) {
    res.status(500).json({ message: 'error finding users' })
  }
})

module.exports = router;


