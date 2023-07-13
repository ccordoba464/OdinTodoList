import elementCreation from "./element-creation";
import tasksManager from "./tasks-manager";

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
      projectsManager.selectedProject = projectObject;
      tasksManager.populateTaskSection(projectsManager.selectedProject.tasks);
    });
    projectsContainer.append(projectElement);
  };

  return { projectsList, selectedProject, createProject, project };
})();

export default projectsManager;
