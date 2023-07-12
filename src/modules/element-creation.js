import displayController from "./display-controller";

const elementCreation = (() => {
  const createTaskElement = task => {
    let newTask = document.createElement("div");
    newTask.classList.add("task");

    let taskTitle = document.createElement("div");
    taskTitle.classList.add("task-title");
    taskTitle.textContent = task.title;
    let taskDescription = document.createElement("div");
    taskDescription.classList.add("task-description");
    taskDescription.textContent = task.description;
    let taskDate = document.createElement("div");
    taskDate.classList.add("task-date");
    taskDate.textContent = task.dueDate;

    newTask.append(taskTitle, taskDescription, taskDate);

    return newTask;
  };

  const expandTask = taskObject => {
    const expandedTask = document.createElement("div");
    expandedTask.id = taskObject.title;
    expandedTask.classList.add("expanded-task");

    const contentContainer = document.createElement("div");
    contentContainer.classList.add("content-container");

    const taskTitle = document.createElement("div");
    taskTitle.id = "task-title";
    taskTitle.textContent = taskObject.title;

    const taskDescription = document.createElement("div");
    taskDescription.id = "task-description";
    taskDescription.textContent = taskObject.description;

    contentContainer.append(taskTitle, taskDescription);

    const detailsContainer = document.createElement("div");
    detailsContainer.classList.add("details-container");

    const taskPriority = document.createElement("div");
    taskPriority.id = "task-priority";
    taskPriority.textContent = "Priority: " + taskObject.priority;

    const taskDate = document.createElement("div");
    taskDate.id = "task-date";
    taskDate.textContent = "Due: " + taskObject.dueDate;

    const taskProject = document.createElement("div");
    taskProject.id = "task-project";
    taskProject.textContent = "Project: " + "N/A";

    const deleteTaskButton = document.createElement("button");
    deleteTaskButton.id = "delete-task-button";
    deleteTaskButton.textContent = "Delete Task";

    detailsContainer.append(
      taskPriority,
      taskDate,
      taskProject,
      deleteTaskButton
    );

    deleteTaskButton.addEventListener("click", () => {
      expandedTask.remove();
      displayController.deleteTask(taskObject);
    });

    expandedTask.append(contentContainer, detailsContainer);

    return expandedTask;
  };

  return { createTaskElement, expandTask };
})();

export default elementCreation;
