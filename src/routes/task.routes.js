const express = require('express');
const router = express.Router();
const Task = require('../models/task')

router.get('/', (req, res)=>{
    res.json({
        status: 'API OK'
    })
});


module.exports = router;