 const session = require('express-session');
 const KnexSessionStore = require('connect-session-knex')(session);
 const configureKnex = require('../data/dbConfig.js')
 
 const sessionConfig = {
  name: 'monster',
  secret: 'keep it safe, keep it secret',
  cookie: {
    maxAge: 1000 * 60 * 10,
    secure: false,
    httpOnly: true,
  },
  resave: false,
  saveUninitialized: false,
  store: new KnexSessionStore({
    knex: configureKnex,
    tablename: 'session',
    sidfieldname: 'sid',
    createtable: true,
    clearInterval: 1000 * 60 * 30
  })
}

module.exports = sessionConfig;