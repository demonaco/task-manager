$(document).ready(function () {
    console.log("hey, i'm some clientside javascript")
    $("#submit-btn").on("click", function (event) {
        event.preventDefault();
        console.log("I was clicked!")
        var newProject = {
            title: $("#title").val().trim(),
            description: $("#description").val().trim()
        };

        $.ajax("/api/projects", {
            type: "POST",
            data: newProject
        }).then(function () {
            console.log("server responded to my request")
            window.location.replace("/projects");
        })
    })

});