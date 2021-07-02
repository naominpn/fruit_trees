const express = require('express');
const router = express.Router();
const User = require('../models/user.js');
const validateUser = require('../middlewares/validate_user.js');
const validateUserLogin = require('../middlewares/validate_user_login.js');

router.get('/', (req, res, next) => {
  User.findAll().then((dbResponse) => {
    res.json(dbResponse.rows);
  });
});

router.post('/', validateUser, (req, res) => {
  const { name, email, password_digest } = req.body;

  User.create(name, email, password_digest).then((dbResponse) => {
    res.status(201).json({
      message: 'new user created',
      user: dbResponse.rows[0],
    });
  });
});

router.delete('/:id', (req, res) => {
  User.delete(req.params.id).then((dbResponse) => {
    res.json({ message: 'user deleted' });
  });
});

router.get('/login', (req, res) => {
  User.checkLogin(req.body.email).then((dbResponse) => {
    if (dbResponse.rows.length > 0) {
      console.log('user');
      if (validateUserLogin(req.body, dbResponse.rows[0])) {
        console.log('login success');
        req.session.loggedIn = true;
        req.session.userId = dbResponse.rows[0].id;
        console.log(req.session);
        res.status(200).json({ message: 'logged in' });
      } else {
        console.log('login failed');
        res.status(418).json({ message: "user/password don't match" });
      }
    } else {
      console.log('no user');
      res.status(418).json({ message: "user doesn't exist" });
    }

    // res.status(200).json(dbResponse.rows);
  });
});

router.get('/logout', (req, res) => {
  req.session.destroy((err) => {});
  res.json({ message: 'logged out' });
});

router.get('/:id', (req, res) => {
  User.findOne(req.params.id).then((dbResponse) => {
    res.json(dbResponse.rows[0]);
  });
});

module.exports = router;
