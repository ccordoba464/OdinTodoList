import projects from "./projects";
import tasks from "./tasks";

const displayController = (() => {
  let currentProject;
  const displayTasks = projectObject => {
    for (let project of projects.projectsList) {
      if (projectObject.title === project.title) {
        currentProject = project;
        tasks.populateTaskSection(project.tasks);
      }
    }
  };

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
        projects.createProject(nameInput.value);
        projectForm.remove();
      } else {
        alert("Enter Project Name");
      }
    });

    cancelButton.addEventListener("click", () => {
      projectForm.remove();
    });

    return projectForm;
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
    nameInput.setAttribute("required", "true");
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
    dateInput.setAttribute("required", "true");
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
      if (nameInput.checkValidity()) {
        tasks.createTask(
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

    return taskForm;
  };

  return { displayTasks, createProjectForm, createTaskForm, currentProject };
})();

export default displayController;
