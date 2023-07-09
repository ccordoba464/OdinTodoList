import projects from "./projects";
import projectTasks from "./tasks";

const displayController = (() => {
  const body = document.querySelector("body");
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
    const submitButton = document.createElement("button");
    submitButton.id = "submit-project";
    submitButton.type = "button";
    submitButton.textContent = "Submit Name";
    projectForm.append(formTitle, nameTitle, nameInput, submitButton);
    body.append(projectForm);
  };

  const createTaskForm = () => {};

  return { displayTasks, createProjectForm, createTaskForm };
})();

export default displayController;
