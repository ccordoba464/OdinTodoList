function createProjectElement(project) {
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
}

export default createProjectElement;
