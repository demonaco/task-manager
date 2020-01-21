console.log("javascript loaded addtask")
$(document).ready(function() {

    //$("#newtask").on("click", function(event) {
    // console.log("clicked newtask")
    // window.location.replace("/projects/addtask");
    //})




    //var url = "/api/projects/" + projectId;
    // AJAX code to POST to the API

    $("#tasksubmit-btn").on("click", function(event) {
        event.preventDefault();
        var projectId = $("#task-form").attr("data-project-id");
        console.log(projectId);
        console.log("I was clicked!")
        var newTask = {
            title: $("#title").val().trim(),
            description: $("#description").val().trim(),
            date: $("#date").val().trim(),

        };


        $.ajax("api/projects/" + projectId, {
            type: "POST",
            data: newTask
        }).then(function() {
            console.log("server responded to my request")
            window.location.replace("/projects");
        })
    });

});