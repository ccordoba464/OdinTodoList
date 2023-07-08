import projects from "./projects";

const displayController = (() => {
  const displayTasks = projectObject => {
    for (let project of projects.projectsList) {
      if (projectObject.title === project.title) {
        for (let task of project.tasks) {
          console.log(task);
        }
      }
    }
  };

  return { displayTasks };
})();

export default displayController;
