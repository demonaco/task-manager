console.log("javascript loaded addtask")
$(document).ready(function() {

    $("#tasksubmit-btn").on("click", function(event) {
        event.preventDefault();
        var projectId = $("#task-form").attr("data-project-id");
        var newTask = {
            title: $("#title").val().trim(),
            description: $("#description").val().trim(),
            date: $("#date").val().trim(),

        };


        $.ajax("/api/projects/" + projectId, {
            type: "POST",
            data: newTask
        }).then(function() {
            window.location.replace("/projects/" + projectId);
        })
    });


    $(".target").change(function() {
        event.preventDefault();
        var project_id = $(this).attr("data-project-id")
        var task_id = $(this).val()
        var status = $("option:selected", this).attr("data-status");

        var obj = { data: status }
        $.ajax("/api/projects/" + project_id + "/tasks/" + task_id, {
            type: "PUT",
            data: obj

        }).then(function() {
            location.reload();
        });
    });

    $(".delete").on("click", function(event) {
        console.log("Delete was clicked");
        event.preventDefault();
        // var project_id = $(this).attr("data-project-id");

        var task_id = $(this).attr("taskId");

        $.ajax({
                method: "DELETE",
                url: "/api/projects/tasks/" + task_id
            })
            .then(function() {
                location.reload();
            });
    });
});