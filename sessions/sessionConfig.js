 const sessionConfig = {
  name: 'monster',
  secret: 'keep it safe, keep it secret',
  cookie: {
    maxAge: 1000 * 60 * 10,
    secure: false,
    httpOnly: true,
  },
  resave: false,
  saveUninitialized: false
}

module.exports = sessionConfig;