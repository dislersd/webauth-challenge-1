const express = require('express');
const server = express();
const userRoutes = require('./users/users-router.js')
const register = require('./auth/register.js')

server.use(express.json());
server.use('/api/users', userRoutes);
server.use('/api/register', register);

server.get('/', (req, res) => {
  res.status(200).send('Hello World')
});

module.exports = server;
