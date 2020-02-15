var express = require("express");
var router = express.Router();
var burger = require("../models/burgers.js");


router.get("/", function(req, res){
    burger.all(function(burger_data){
        console.log(burger_data);
        var hbsObj = {
            burgers: burger_data
        }
        res.render("index", hbsObj);
    });
});

router.put("/burger/update", function(req, res){
    burger.update(req.body.burger_id, function(result){
        console.log(result);
        res.redirect("/");
    });
});

router.post("/burger/create", function(req, res){
    console.log(req.body.burger_name);
    
    burger.create(req.body.burger_name, function(result){
        res.redirect("/");
    })
})

module.exports = router;