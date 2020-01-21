$(document).ready(function () {
    $("#submit-btn").on("click", function (event) {
        event.preventDefault();

        var newProject = {
            title: $("#title").val().trim(),
            description: $("#description").val().trim()
        };

        $.ajax("/api/projects", {
            type: "POST",
            data: newProject
        }).then(function () {

            window.location.replace("/projects");
        })
    })

});