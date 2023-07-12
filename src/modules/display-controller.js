import projects from "./projects";
import projectTasks from "./tasks";

const displayController = (() => {
  const displayTasks = projectObject => {
    for (let project of projects.projectsList) {
      if (projectObject.title === project.title) {
        projectTasks.populateTaskSection(project.tasks);
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
    nameTitle.id = "name-title";
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

  const createTaskForm = () => {};

  return { displayTasks, createProjectForm, createTaskForm };
})();

export default displayController;
