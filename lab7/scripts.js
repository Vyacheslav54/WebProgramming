$(document).ready(function () {
    function addTask() {
        let taskText = $("#taskInput").val().trim();
        if (taskText !== "") {
            $("#taskList").append(
                `<li class='list-group-item d-flex justify-content-between'>
                    ${taskText} 
                    <button class='btn btn-danger btn-sm removeTask'>Delete</button>
                </li>`
            );
            $("#taskInput").val("").focus();
        }
    }

    $("#addTask").click(addTask);

    $("#taskInput").keyup(function (event) {
        if (event.key === "Enter") {
            addTask();
        }
    });

    $("#taskList").on("click", ".removeTask", function () {
        $(this).parent().fadeOut(300, function () {
            $(this).remove();
        });
    });
});
