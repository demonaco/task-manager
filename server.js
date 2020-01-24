var express = require("express");
var session = require("express-session");
// Requiring passport as we've configured it
var passport = require("./config/passport");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
var moment = require('moment');

var app = express();
var PORT = process.env.PORT || 8080;

var db = require("./models");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// We need to use sessions to keep track of our user's login status
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

app.engine("handlebars", exphbs({
    defaultLayout: "main",
    helpers: {
        equal: function (lvalue, rvalue, options) {
            if (lvalue != rvalue) {
                return options.inverse(this);
            } else {
                return options.fn(this);
            }
        },

        readableDate: function (date) {
            return moment(date).format('YYYY-MM-DD');
        }
    }
}));
app.set("view engine", "handlebars");

var apiRoutes = require("./controllers/api_routes");
app.use(apiRoutes);

var htmlRoutes = require("./controllers/html_routes.js");
app.use(htmlRoutes);


db.sequelize.sync().then(function () {
    app.listen(PORT, function () {
        console.log("App listening on PORT " + PORT);
    });
});