var express = require("express");

var db = require("../models")

var router = express.Router();


router.get("/", function(req, res) {
    res.render("index")
});

router.get("/projects", function (req, res) {
    db.Project.findAll({
        raw: true,
        //TODO: where by user id 
    }).then(function(data) {
        var hbsObj = {
            projects: data
        }
        res.render("projects", hbsObj);
    });
});


// app.get("/task", function(req, res){
//     res.sendFile(path.join(__dirname, "../public/task.html"))
// })

// app.get("*", function(req, res) {
//     res.sendFile(path.join(__dirname, "../public/index.html"))
// })

module.exports = router; 
