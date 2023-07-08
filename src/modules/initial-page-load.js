function loadPage() {
  const projects = document.getElementById("projects");
  const initialProject = project();
  const projectTitle = initialProject.querySelector(".project-title");
  projectTitle.textContent += "To-do";
  projects.appendChild(initialProject);
}

const project = () => {
  let newProject = document.createElement("div");
  newProject.classList.add("project");

  let projectTitle = document.createElement("div");
  projectTitle.classList.add("project-title");
  let projectItems = document.createElement("div");
  projectItems.classList.add("project-items");

  newProject.append(projectTitle, projectItems);

  return newProject;
};

export default loadPage;
