var express = require('express');
var router = express.Router();

const ClassModel = require('../models/ClassModel');

router.get('/', async(req, res)=> {
    let classList = await ClassModel.find({});
    res.render('class/index', {classList});
})

module.exports = router;