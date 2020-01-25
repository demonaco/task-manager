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
- Heroku for deployment

## How this works ?
User makes an account by signing up on the home page. User name and password is stored in user model in the database. We have used bcrypt for encryption, which hashes the password before saving.
Now whenever user logs in, unhashed password entered by the user can be compared to the hashed password stored in our database.

### Code Snippet

```
User.prototype.validPassword = function(password) {
        return bcrypt.compareSync(password, this.password);
    };
    
    User.addHook("beforeCreate", function(user) {
        user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
    });
    return User;
};

```