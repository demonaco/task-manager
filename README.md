# What is Taskify
It is a full-stack application to manage all of your projects and tasks in one place, and track the progress you're making every step of the way.
Instead of getting stressed about your to do list, you can securely make an account on Taskify and organize your tasks so that you can tackle them boldy. 
You can view, update, delete or add(CRUD operations) your tasks and projects.

### App-Demo


### Link to the app

## Built With

***Frontend***
- HTML
- Handlebars
- Codepen
- CSS
- Bootstrap
- Javascript
- Jquery

***Backend***
- Nodejs
- Npmjs packages: 
- **express**  if you want to know more about it https://www.npmjs.com/package/express
- **express-session**
- **body-parser**
- **express-handlebars**
- **dotenv**
- **passport**
- **bcryptjs**
- **mysql2**
- **sequalize** for database
- **moment**
- **datepicker**
- Heroku for deployment

## How this works ?
 After signing up on the homepage that user is directed to the dashboard area where they can make and save their new projects. Inside a project you have three lists todo,in progress and done. You can add your tasks to the lists and move them around as soon as they get done. You can also delete your projects and tasks. 
 
 ## Code Highlights

User name and password is stored in user model in the database. We have used bcrypt for encryption, which hashes the password before saving.
Now whenever user logs in, unhashed password entered by the user can be compared to the hashed password stored in our database.



```
var bcrypt = require("bcryptjs");

module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
        // The email cannot be null, and must be a proper email before creation
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        // The password cannot be null
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
User.prototype.validPassword = function(password) {
        return bcrypt.compareSync(password, this.password);
    };
    
    User.addHook("beforeCreate", function(user) {
        user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
    });
    return User;
};

```
Api route to create new project

```
router.post("/api/projects", isAuthenticated, function(req, res) {

    db.Project.create({
            title: req.body.title,
            description: req.body.description,
            UserId: req.user.id
        })
        .then(function() {
            // res.redirect(307, "/projects");
            res.json({});
        })
        .catch(function(err) {
            res.status(401).json(err);
        });
});

```