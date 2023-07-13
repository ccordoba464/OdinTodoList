import elementCreation from "./modules/element-creation";
import projects from "./modules/projects-manager";

init();

function addButtonListeners() {
  const addProjectButton = document.getElementById("add-project");
  addProjectButton.addEventListener("click", () => {
    if (!document.getElementById("project-form")) {
      elementCreation.createProjectForm();
    }
  });

  const addTasksButton = document.getElementById("add-task");
  addTasksButton.addEventListener("click", () => {
    if (!document.getElementById("task-form")) {
      elementCreation.createTaskForm();
    }
  });
}

function init() {
  addButtonListeners();
  projects.createProject("Inbox");
}
