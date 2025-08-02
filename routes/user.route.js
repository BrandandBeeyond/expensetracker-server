const { registerNewUser, checkUserExists } = require('../controllers/user.controller');

const userRouter = require('express').Router();


userRouter.post('/register',registerNewUser);
userRouter.post('/check-user',checkUserExists);


module.exports = userRouter;