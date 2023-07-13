import elementCreation from "./element-creation";
import projectsManager from "./projects-manager";
import tasksManager from "./tasks-manager";

const inboxManager = (() => {
  let inbox = projectsManager.project("inbox");

  const createIndexElement = () => {
    const projectsContainer = document.getElementById("projects");
    projectsManager.selectedProject = inbox;

    let inboxElement = elementCreation.createInboxElement();
    inboxElement.addEventListener("click", () => {
      projectsManager.selectedProject = inbox;
      totalTasksPopulation();
    });
    projectsContainer.append(inboxElement);
  };

  const totalTasksPopulation = () => {
    const projectTasksContainer = document.getElementById("project-tasks");

    while (projectTasksContainer.firstChild) {
      projectTasksContainer.firstChild.remove();
    }

    for (let taskObject of inbox.tasks) {
      let taskElement = elementCreation.createTaskElement(taskObject);
      projectTasksContainer.appendChild(taskElement);
    }

    for (let project of projectsManager.projectsList) {
      for (let taskObject of project.tasks) {
        let taskElement = elementCreation.createTaskElement(taskObject);
        projectTasksContainer.appendChild(taskElement);
      }
    }
  };
  return { createIndexElement };
})();

export default inboxManager;
