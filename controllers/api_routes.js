var taskData = require('../app/data/tasks');

module.exports = function(app) {
    app.get("/api/tasks", function(req, res){
        res.json(taskData);
    })

    app.post("/api/tasks", function(req, res) {
        taskData.push(req.body);
        res.json(true);
        console.log(taskData)
    });
}