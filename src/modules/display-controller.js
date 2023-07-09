import projects from "./projects";
import projectTasks from "./tasks";

const displayController = (() => {
  const displayTasks = projectObject => {
    for (let project of projects.projectsList) {
      if (projectObject.title === project.title) {
        projectTasks.populateTaskSection(project.tasks);
      }
    }
  };

  return { displayTasks };
})();

export default displayController;
