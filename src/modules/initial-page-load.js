function loadPage() {
  const projects = document.getElementById("projects");
  const initialProject = createProject();
  const projectTitle = initialProject.querySelector(".project-title");
  projectTitle.textContent += "To-do";
  projects.appendChild(initialProject);
}

function createProject() {
  let newProject = document.createElement("div");
  newProject.classList.add("project");

  let projectTitle = document.createElement("div");
  projectTitle.classList.add("project-title");
  projectTitle.textContent = "Project: ";

  newProject.append(projectTitle, projectPriority);

  return newProject;
}

export default loadPage;
