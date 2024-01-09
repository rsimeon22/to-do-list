function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");
    var completedTasks = document.getElementById("completedTasks");

    if (taskInput.value !== "") {
        var li = document.createElement("li");
        li.innerHTML = taskInput.value + '<button class="delete-btn" onclick="deleteTask(this)"> Delete</button>';
        taskList.appendChild(li);
        taskInput.value = "";
    }
}

function deleteTask(btn) {
    var li = btn.parentNode;
    li.parentNode.removeChild(li);
}
