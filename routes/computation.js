var express = require('express');
var router = express.Router();

/* GET Computation page. */
router.get('/', function(req, res, next) {
    var p;
    var rdm=Math.random();
    console.log(req.query.p);
    k=req.query.p;
    if(p==undefined){
        p=rdm;
    }
    let atan2=Math.atan2(p,p);
    let atanh=Math.atanh(p);
    let cbrt=Math.cbrt(p);

    res.render('computation',{
        title:'Computation',
        a1:`applied to `+p+` is `+atan2,
        a2:`applied to `+p+` is `+atanh,
        a3:`applied to `+p+` is `+cbrt,
    });
});

module.exports = router;
