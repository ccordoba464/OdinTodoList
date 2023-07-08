import createProjectElement from "./display-controller";

const projects = (() => {
  const projectsElement = document.getElementById("projects");
  let projects = [];

  const project = title => {
    let tasks = [];
    return { title, tasks };
  };

  const createProject = title => {
    let newProject = project(title);
    projects.push(newProject);
  };

  const populateProjects = () => {
    for (let project of projects) {
      projectsElement.append(createProjectElement(project));
    }
  };

  return { projects, createProject, populateProjects };
})();

export default projects;
