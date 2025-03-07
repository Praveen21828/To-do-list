const taskInput = document.getElementById("new-task");
const addTaskButton = document.getElementById("add-task");
const taskList = document.getElementById("task-list");

addTaskButton.addEventListener("click", function() {
  const taskText = taskInput.value.trim();
  if (taskText !== "") {
    const taskItem = document.createElement("li");
    taskItem.innerHTML = `
      <input type="checkbox">
      <span>${taskText}</span>
      <button class="delete">Delete</button>
    `;
    taskList.appendChild(taskItem);
    taskInput.value = "";

    const deleteButton = taskItem.querySelector(".delete");
    deleteButton.addEventListener("click", function() {
      taskItem.remove();
    });

    const checkbox = taskItem.querySelector("input[type=checkbox]");
    checkbox.addEventListener("change", function() {
      if (this.checked) {
        taskItem.classList.add("completed");
      } else {
        taskItem.classList.remove("completed");
      }
    });
  }
});
