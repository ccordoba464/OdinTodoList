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
    projectForm.id = "player-form";
    const nameInput = document.createElement("input");
    nameInput.placeholder = "Enter Name";
    nameInput.setAttribute("required", "true");
    const submitButton = document.createElement("button");
    submitButton.id = "submit-player";
    submitButton.type = "button";
    submitButton.textContent = "Submit Name";
    projectForm.append(nameInput, submitButton);
  };

  const createTaskForm = () => {};

  return { displayTasks, createProjectForm, createTaskForm };
})();

export default displayController;
