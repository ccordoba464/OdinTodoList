import displayController from "./display-controller";

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
    let projectElement = createProjectElement(projectObject);
    projectElement.addEventListener("click", () => {
      displayController.currentProject = projectObject;
      displayController.displayTasks(projectObject);
    });
    projectsContainer.append(projectElement);
  };

  const createProjectElement = project => {
    let newProject = document.createElement("div");
    newProject.classList.add("project");
    newProject.id = project.title;

    let projectTitle = document.createElement("div");
    projectTitle.classList.add("project-title");
    projectTitle.textContent = project.title;
    let projectItems = document.createElement("div");
    projectItems.classList.add("project-items");
    projectItems.textContent = project.tasks.length;

    newProject.append(projectTitle, projectItems);

    return newProject;
  };

  return { projectsList, createProject };
})();

export default projects;
