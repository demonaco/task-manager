var express = require("express");

var db = require("../models");

var router = express.Router();

var isAuthenticated = require("../config/middleware/isAuthenticated");

router.get("/", function (req, res) {
    res.render("index", {
        user: req.user
    });
});

router.get("/signup", function (req, res) {
    console.log("route get /")
    // If the user already has an account send them to the members page
    if (req.user) {
        return res.redirect("/projects");
    }
    res.render("signup");
});

router.get("/login", function (req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
        return res.redirect("/projects");
    }
    res.render("login");
});
// Here we've add our isAuthenticated middleware to this route.
// If a user who is not logged in tries to access this route they will be redirected to the signup page

// router.get("/members", isAuthenticated, function (req, res) {
//     res.render("members");
// })

router.get("/projects", isAuthenticated, function (req, res) {
    db.Project.findAll({
        raw: true,
        where: {
            UserId: req.user.id
        }
    }).then(function (data) {
        var hbsObj = {
            projects: data,
            user: req.user
        }
        res.render("projects", hbsObj);
    });
});

router.get("/projects/new", isAuthenticated, function (req, res) {
    res.render("project-form", {
        user: req.user
    });
});

router.get("/projects/:id/new", isAuthenticated, function (req, res) {

    var hbsObject = {
        project_id: req.params.id,
        user: req.user
    }
    res.render("addTask", hbsObject);
});


router.get("/projects/:id", isAuthenticated, function (req, res) {
    db.Task.findAll({
        raw: true,
        where: {
            ProjectId: req.params.id
        }
    }).then(function (data) {
        var hbsObj = {
            tasks: data,
            user: req.user,
            project_id: req.params.id
        }
        res.render("project-tasks", hbsObj);
    });
});




module.exports = router;