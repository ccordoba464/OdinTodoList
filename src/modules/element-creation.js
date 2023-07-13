import tasksManager from "./tasks-manager";
import projectsManager from "./projects-manager";
import displayController from "./display-controller";

const elementCreation = (() => {
  const body = document.querySelector("body");

  /* Tasks */

  const createTaskElement = task => {
    let taskElement = document.createElement("div");
    taskElement.classList.add("task");

    let taskTitle = document.createElement("div");
    taskTitle.classList.add("task-title");
    taskTitle.textContent = task.title;
    let taskDescription = document.createElement("div");
    taskDescription.classList.add("task-description");
    taskDescription.textContent = task.description;
    let taskDate = document.createElement("div");
    taskDate.classList.add("task-date");
    taskDate.textContent = task.dueDate;

    taskElement.append(taskTitle, taskDescription, taskDate);

    taskElement.addEventListener("click", () => {
      if (displayController.checkAvailability()) {
        elementCreation.expandTask(task);
      }
    });

    return taskElement;
  };

  const expandTask = taskObject => {
    const expandedTask = document.createElement("div");
    expandedTask.id = "expanded-task";
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
      tasksManager.deleteTask(taskObject);
    });

    expandedTask.append(contentContainer, detailsContainer);

    body.append(expandedTask);
  };

  /* Projects / Inbox */

  const createProjectElement = project => {
    let newProject = document.createElement("div");
    newProject.classList.add("project");
    newProject.id = project.title;

    let projectTitle = document.createElement("div");
    projectTitle.classList.add("project-title");
    projectTitle.textContent = project.title;
    let projectItems = document.createElement("div");
    projectItems.classList.add("project-items");
    projectItems.textContent = project.tasks.length;

    newProject.append(projectTitle, projectItems);

    return newProject;
  };

  const createInboxElement = () => {
    let inboxElement = document.createElement("div");
    inboxElement.classList.add("project");
    inboxElement.id = "inbox";

    let projectTitle = document.createElement("div");
    projectTitle.classList.add("project-title");
    projectTitle.textContent = "inbox";
    let projectItems = document.createElement("div");
    projectItems.classList.add("project-items");
    projectItems.textContent = 0;

    inboxElement.append(projectTitle, projectItems);

    return inboxElement;
  };

  /* Forms */

  const createProjectForm = () => {
    const projectForm = document.createElement("form");
    projectForm.id = "project-form";
    const formTitle = document.createElement("div");
    formTitle.id = "form-title";
    formTitle.textContent = "Add Project";
    const nameTitle = document.createElement("div");
    nameTitle.classList.add("title");
    nameTitle.textContent = "Name";
    const nameInput = document.createElement("input");
    nameInput.setAttribute("required", "true");
    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("button-container");
    const cancelButton = document.createElement("button");
    cancelButton.id = "form-button";
    cancelButton.type = "button";
    cancelButton.textContent = "Cancel";
    const submitButton = document.createElement("button");
    submitButton.id = "form-button";
    submitButton.type = "button";
    submitButton.textContent = "Add";
    buttonContainer.append(cancelButton, submitButton);
    projectForm.append(formTitle, nameTitle, nameInput, buttonContainer);

    submitButton.addEventListener("click", () => {
      event.preventDefault();
      if (nameInput.checkValidity()) {
        projectsManager.createProject(nameInput.value);
        projectForm.remove();
      } else {
        alert("Enter Project Name");
      }
    });

    cancelButton.addEventListener("click", () => {
      projectForm.remove();
    });

    body.append(projectForm);
  };

  const createTaskForm = () => {
    const taskForm = document.createElement("form");
    taskForm.id = "task-form";
    const formTitle = document.createElement("div");
    formTitle.id = "form-title";
    formTitle.textContent = "Add Task";

    const nameContainer = document.createElement("div");
    const nameTitle = document.createElement("div");
    nameTitle.classList.add("title");
    nameTitle.textContent = "Task Name";
    const nameInput = document.createElement("input");
    //nameInput.setAttribute("required", "true");
    nameContainer.append(nameTitle, nameInput);

    const descriptionContainer = document.createElement("div");
    const descriptionTitle = document.createElement("div");
    descriptionTitle.classList.add("title");
    descriptionTitle.textContent = "Description";
    const descriptionInput = document.createElement("input");
    descriptionInput.setAttribute("required", "true");
    descriptionContainer.append(descriptionTitle, descriptionInput);

    const dateContainer = document.createElement("div");
    const dateTitle = document.createElement("div");
    dateTitle.classList.add("title");
    dateTitle.textContent = "Due Date";
    const dateInput = document.createElement("input");
    dateInput.type = "date";
    //dateInput.setAttribute("required", "true");
    dateContainer.append(dateTitle, dateInput);

    const priorityContainer = document.createElement("div");
    const priorityTitle = document.createElement("div");
    priorityTitle.classList.add("title");
    priorityTitle.textContent = "Priority";
    const priorityInput = document.createElement("select");
    priorityInput.setAttribute("required", "true");
    const highChoice = document.createElement("option");
    highChoice.textContent = "High";
    const mediumChoice = document.createElement("option");
    mediumChoice.textContent = "Medium";
    const lowChoice = document.createElement("option");
    lowChoice.textContent = "Low";
    priorityInput.append(highChoice, mediumChoice, lowChoice);

    priorityContainer.append(priorityTitle, priorityInput);

    const inputContainer = document.createElement("div");
    inputContainer.classList.add("input-container");
    inputContainer.append(dateContainer, priorityContainer);

    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("button-container");
    const cancelButton = document.createElement("button");
    cancelButton.id = "form-button";
    cancelButton.type = "button";
    cancelButton.textContent = "Cancel";
    const submitButton = document.createElement("button");
    submitButton.id = "form-button";
    submitButton.type = "button";
    submitButton.textContent = "Add";

    buttonContainer.append(cancelButton, submitButton);
    taskForm.append(
      formTitle,
      nameContainer,
      descriptionContainer,
      inputContainer,
      buttonContainer
    );

    submitButton.addEventListener("click", () => {
      event.preventDefault();
      if (nameInput.checkValidity()) {
        tasksManager.createTask(
          nameInput.value,
          descriptionInput.value,
          dateInput.value,
          priorityInput.value
        );
        taskForm.remove();
      } else {
        alert("Enter Project Name");
      }
    });

    cancelButton.addEventListener("click", () => {
      taskForm.remove();
    });

    body.append(taskForm);
  };

  return {
    createTaskElement,
    expandTask,
    createProjectElement,
    createInboxElement,
    createProjectForm,
    createTaskForm,
  };
})();

export default elementCreation;
