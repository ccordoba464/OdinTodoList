import displayController from "./display-controller";

const projects = (() => {
  const projectsElement = document.getElementById("projects");
  let projects = [];

  const project = title => {
    let tasks = [3, 1];
    return { title, tasks };
  };

  const createProject = title => {
    let projectObject = project(title);
    projects.push(projectObject);
    let projectElement = createProjectElement(projectObject);
    projectElement.addEventListener(
      "click",
      displayController.displayTasks(projectElement)
    );
    projectsElement.append(projectElement);
  };

  const createProjectElement = project => {
    let newProject = document.createElement("div");
    newProject.classList.add("project");

    let projectTitle = document.createElement("div");
    projectTitle.classList.add("project-title");
    projectTitle.textContent = project.title;
    let projectItems = document.createElement("div");
    projectItems.classList.add("project-items");
    projectItems.textContent = project.tasks.length;

    newProject.append(projectTitle, projectItems);

    return newProject;
  };

  return { projects, createProject };
})();

export default projects;
