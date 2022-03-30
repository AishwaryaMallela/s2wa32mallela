var express = require('express');
const{param} = require('./users');
var router = express.Router();
var c = Math.random().toFixed(2);

console.log(c);
/* GET Computation page. */
router.get('/', function(req, res, next) {
    if (req.query.c!=undefined) {
        c=req.query.c;
    }
    res.send('Cuberoot applied to ' +c+ ' is '+Math.cbrt(c));
});

module.exports = router;
