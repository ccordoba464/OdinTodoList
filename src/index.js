import displayController from "./modules/display-controller";
import projects from "./modules/projects";

init();

function addButtonListeners() {
  const addProjectButton = document.getElementById("add-project");
  addProjectButton.addEventListener(
    "click",
    displayController.createProjectForm()
  );
  const addTasksButton = document.getElementById("add-task");
  addTasksButton.addEventListener("click", displayController.createTaskForm());
}

function init() {
  addButtonListeners();
  projects.createProject("To-do");
}
