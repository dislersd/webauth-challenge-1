const express = require('express');
const server = express();
const userRoutes = require('./users/users-router.js')

server.use(express.json());
server.use('/api/users', userRoutes);

server.get('/', (req, res) => {
  res.status(200).send('Hello World')
});

module.exports = server;
