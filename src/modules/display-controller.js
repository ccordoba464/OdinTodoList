import projects from "./projects";

const displayController = (() => {
  const displayTasks = projectElement => {
    console.log(projectElement);
    let title = projectElement.querySelector(".project-title");
    console.log(title);
    for (let project in projects.projects) {
      console.log(project);

      if (project.title == title.textContent) {
        console.log(project.title);
      }
    }
  };

  return { displayTasks };
})();

export default displayController;
