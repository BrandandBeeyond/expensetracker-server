const { addCategory } = require('../controllers/category.controller');


const categoryRouter = require('express').Router();


categoryRouter.post('/add',addCategory);


module.exports = categoryRouter;