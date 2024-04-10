const express = require('express');
const router = express.Router();

const account = {
    "uname":"ryllevisto23",
    "pword":"admin"
}

router.get('/authenticate', function (req, res, next) {
    res.send("authenticate");
});

router.get('/check',function(req, res, next){
    res.send("check");
})

module.exports = router