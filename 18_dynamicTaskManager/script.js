document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("taskInput");
    const addTaskButton = document.getElementById("addTask");
    const taskList = document.getElementById("taskList");
    const clearTasksButton = document.getElementById("clearTasks");


    addTaskButton.addEventListener("click", () => {
        const taskText = taskInput.value.trim();
        if (taskText === "") return;

        const li = document.createElement("li");
        li.className = "flex justify-between items-center bg-gray-100 p-3 rounded-lg shadow";

        const span = document.createElement("span");
        span.textContent = taskText;
        span.className = "flex-grow text-gray-700";

        const editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.className = "bg-yellow-500 text-white rounded-lg px-3 py-1 mr-2 hover:bg-yellow-600";
        editButton.addEventListener("click", () => {
            const newTaskText = prompt("Edit your task:", span.textContent);
            if (newTaskText !== null && newTaskText.trim() !== "") {
                span.textContent = newTaskText.trim();
            }
        });

        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.className = "bg-red-500 text-white rounded-lg px-3 py-1 hover:bg-red-600";
        removeButton.addEventListener("click", () => {
            li.remove();
        });

        li.appendChild(span);
        li.appendChild(editButton);
        li.appendChild(removeButton);
        taskList.appendChild(li);

        taskInput.value = "";
    });

    clearTasksButton.addEventListener("click", () => {
        taskList.innerHTML = "";
    });
});
