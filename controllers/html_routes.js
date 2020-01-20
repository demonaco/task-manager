var express = require("express");

var db = require("../models");

var router = express.Router();

router.get("/", function (req, res) {
    res.render("index");
});

router.get("/signup", function (req, res) {
    console.log("route get /")
    // If the user already has an account send them to the members page
    //  if (req.user) {
    //  res.redirect("/members");
    // }
    res.render("signup");
});
router.get("/login", function (req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
        res.redirect("/members");
    }
    res.render("login");
});
// Here we've add our isAuthenticated middleware to this route.
// If a user who is not logged in tries to access this route they will be redirected to the signup page

// router.get("/members", isAuthenticated, function (req, res) {
//     res.render("members");
// })

router.get("/projects", function (req, res) {
    db.Project.findAll({
        raw: true,
        //TODO: where by user id 
    }).then(function (data) {
        var hbsObj = {
            projects: data
        }
        res.render("projects", hbsObj);
    });
});

router.get("/projects/new", function (req, res) {
    res.render("project-form");
});

router.get("/projects/:id", function (req, res) {
    db.Task.findAll({
        raw: true,
        where: {
            ProjectId: req.params.id
        }
    }).then(function (data) {
        var hbsObj = {
            tasks: data
        }
        res.render("project-tasks", hbsObj);
    });
});


module.exports = router;