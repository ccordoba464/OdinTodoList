import displayController from "./modules/display-controller";
import projects from "./modules/projects";

init();

function addButtonListeners() {
  const addProjectButton = document.getElementById("add-project");
  addProjectButton.addEventListener("click", () => {
    if (!document.getElementById("project-form")) {
      const body = document.querySelector("body");
      let formElement = displayController.createProjectForm();
      body.append(formElement);
    }
  });
  const addTasksButton = document.getElementById("add-task");
  addTasksButton.addEventListener("click", () => {
    if (!document.getElementById("task-form")) {
      const body = document.querySelector("body");
      let formElement = displayController.createTaskForm();
      body.append(formElement);
    }
  });
}

function init() {
  addButtonListeners();
  projects.createProject("To-do");
}
