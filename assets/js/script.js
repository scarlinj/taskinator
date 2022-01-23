var buttonEl = document.querySelector("#save-task");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var createTaskHandler = function () {
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    listItemEl.textContent = "This is a new task.";
    tasksToDoEl.appendChild(listItemEl);
};

buttonEl.addEventListener("click", createTaskHandler);

console.log(buttonEl);

// buttonEl.addEventListener("click", function () {
//     var taskItemEl = document.createElement("li");
//     taskItemEl.className = "task-item";
//     taskItemEl.textContent = "This is a new task.";
//     tasksToDoEl.appendChild(taskItemEl);
// });


// It's important to place this function expression before the event listener. 
// Otherwise, we'd receive an error that createTaskHandler() isn't defined because 
// we'd be calling the function before we defined it.

// replaced this event listener with the below, to use the createTaskHandler 
// function as a callback function.