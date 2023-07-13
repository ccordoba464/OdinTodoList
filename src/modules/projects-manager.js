import displayController from "./display-controller";
import elementCreation from "./element-creation";

const projectsManager = (() => {
  const projectsContainer = document.getElementById("projects");
  let projectsList = [];
  let selectedProject;

  const project = title => {
    let tasks = [];
    return { title, tasks };
  };

  const createProject = title => {
    let projectObject = project(title);
    projectsManager.selectedProject = projectObject;
    projectsList.push(projectObject);
    let projectElement = elementCreation.createProjectElement(projectObject);
    projectElement.addEventListener("click", () => {
      displayController.currentProject = projectObject;
      displayController.displayTasks(projectObject);
    });
    projectsContainer.append(projectElement);
  };

  return { projectsList, selectedProject, createProject };
})();

export default projectsManager;
