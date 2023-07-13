import elementCreation from "./modules/element-creation";
import projects from "./modules/projects";

init();

function addButtonListeners() {
  const addProjectButton = document.getElementById("add-project");
  addProjectButton.addEventListener("click", () => {
    if (!document.getElementById("project-form")) {
      const body = document.querySelector("body");
      let formElement = elementCreation.createProjectForm();
      body.append(formElement);
    }
  });

  const addTasksButton = document.getElementById("add-task");
  addTasksButton.addEventListener("click", () => {
    if (!document.getElementById("task-form")) {
      const body = document.querySelector("body");
      let formElement = elementCreation.createTaskForm();
      body.append(formElement);
    }
  });
}

function init() {
  addButtonListeners();
  projects.createProject("Inbox");
}
