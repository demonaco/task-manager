# What is Taskify
It is a full-stack application to manage all of your projects and tasks in one place, and track the progress you're making every step of the way.
Instead of getting stressed about your to do list, you can securely make an account on Taskify and organize your tasks so that you can tackle them boldy. 
You can view, update, delete or add(CRUD operations) your tasks and projects.

### App-Demo
![image](https://user-images.githubusercontent.com/54960706/73137458-26ec6300-400d-11ea-809b-699be9fc3b59.png)



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

![image](https://user-images.githubusercontent.com/54960706/73137226-bfcdaf00-400a-11ea-8632-e6069feacaf6.png)


Api route to create new project

![image](https://user-images.githubusercontent.com/54960706/73137180-4930b180-400a-11ea-9780-da7b4c873712.png)

Html route to display project

![image](https://user-images.githubusercontent.com/54960706/73137266-310d6200-400b-11ea-8e6f-fc7c92b28fd2.png)

Client side Javascript to create a new project

![image](https://user-images.githubusercontent.com/54960706/73137333-d0325980-400b-11ea-9c8d-114c360e3cfe.png)

Javascript to change the status of a task

![image](https://user-images.githubusercontent.com/54960706/73137384-3a4afe80-400c-11ea-84da-44b89a455882.png)
