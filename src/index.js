import displayController from "./modules/display-controller";
import projects from "./modules/projects";

init();

function addButtonListeners() {
  const addProjectButton = document.getElementById("add-project");
  addProjectButton.addEventListener("click", () => {
    if (!document.getElementById("project-form")) {
      const body = document.querySelector("body");
      let form = displayController.createProjectForm();
      form.focus();
      body.append(form);
    }
  });
  const addTasksButton = document.getElementById("add-task");
  addTasksButton.addEventListener("click", () => {
    if (!document.getElementById("task-form")) {
      const body = document.querySelector("body");
      let form = displayController.createTaskForm();
      body.append(form);
    }
  });
}

function init() {
  addButtonListeners();
  projects.createProject("To-do");
}
