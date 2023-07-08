import projects from "./modules/projects";

init();

function init() {
  projects.createProject("To-do");
  projects.populateProjects();
}
