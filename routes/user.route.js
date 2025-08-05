const { registerNewUser, checkUserExists, loginUser } = require('../controllers/user.controller');

const userRouter = require('express').Router();


userRouter.post('/register',registerNewUser);
userRouter.post('/login',loginUser);
userRouter.post('/check-user',checkUserExists);


module.exports = userRouter;