import displayController from "./modules/display-controller";
import elementCreation from "./modules/element-creation";
import inboxManager from "./modules/inbox-manager";

init();

function addButtonListeners() {
  const addProjectButton = document.getElementById("add-project");
  addProjectButton.addEventListener("click", () => {
    if (displayController.checkAvailability()) {
      elementCreation.createProjectForm();
    }
  });

  const addTasksButton = document.getElementById("add-task");

  addTasksButton.addEventListener("click", () => {
    if (displayController.checkAvailability()) {
      elementCreation.createTaskForm();
    }
  });
}

function init() {
  inboxManager.createIndexElement();
  addButtonListeners();
}
