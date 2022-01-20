const express = require('express');
const userController = require('../controllers/userController');
const sessionController = require('../controllers/sessionController');
const cookieController = require('../controllers/cookieController');

const router = express.Router();
const { signup, login } = userController;
const { setSSIDCookie } = cookieController;
const { startSession } = sessionController;

router.post('/login', login, (req, res)=>{
  return res.status(200).json({isMatch: res.locals.isMatch});
}); 

router.get('/users',
  userController.getAllUsers,
  (req, res) => res.status(200).json(res.locals.users)
);

router.post('/signup', signup, (req, res) => {
  // steps: signup middleare to add user data to database, session middleware, cookie middleware to set a cookie
  // inputs: first_name, last_name, email, password
  console.log(req.body);
  res.status(200).send('Account successfully created');
});
  
router.post('/login', login, setSSIDCookie, startSession, (req, res) => {
  //router.post('/login', login, setSSIDCookie, (req, res) => {
  // need to add set cookie middleware after login middleware
  // steps: login middleware to verify user data in db, session middleware, cookie middleware to set cookie
  // inputs: email, password
  // res.status(200).send('Successfully logged in');
  return res.status(200).json({ isMatch: res.locals.isMatch });
});


module.exports = router;