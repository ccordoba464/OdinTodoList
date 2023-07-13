import displayController from "./display-controller";
import elementCreation from "./element-creation";

const projects = (() => {
  const projectsContainer = document.getElementById("projects");
  let projectsList = [];

  const project = title => {
    let tasks = [];
    return { title, tasks };
  };

  const createProject = title => {
    let projectObject = project(title);
    displayController.currentProject = projectObject;
    projectsList.push(projectObject);
    let projectElement = elementCreation.createProjectElement(projectObject);
    projectElement.addEventListener("click", () => {
      displayController.currentProject = projectObject;
      displayController.displayTasks(projectObject);
    });
    projectsContainer.append(projectElement);
  };

  return { projectsList, createProject };
})();

export default projects;
