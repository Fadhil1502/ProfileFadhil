const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('index', {
        mode: req.query.mode
    })
})


module.exports = router