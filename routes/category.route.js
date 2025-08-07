const upload = require('../config/multerConfig');
const { addCategory } = require('../controllers/category.controller');


const categoryRouter = require('express').Router();


categoryRouter.post('/add',upload.fields([{
    name:'icon',
    maxCount:1
}]),addCategory);


module.exports = categoryRouter;