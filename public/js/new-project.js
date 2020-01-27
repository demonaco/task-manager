$(document).ready(function() {

    $("#create-project").on("click", function(event) {
        window.location.replace("/projects/new");
    });

    console.log("hey, i'm some clientside javascript")
    $("#project-form").on("submit", function(event) {
        event.preventDefault();

        var newProject = {
            title: $("#title").val().trim(),
            description: $("#description").val().trim()
        };

        $.ajax("/api/projects", {
            type: "POST",
            data: newProject
        }).then(function(resp) {
            console.log("server responded to my request")
            window.location.replace("/projects");
        })
    });


    $(document).on("click","#deleteProject", function(event) {
        console.log("your in delete function")
        event.preventDefault();
        var project_id = $(this).attr("projectId");

        $.ajax("/api/projects/" + project_id, {
            type: "DELETE"
        }).then(function() {
            window.location.reload();
        });
    });

});