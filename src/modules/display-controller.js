import projects from "./projects";
import tasks from "./tasks";

const displayController = (() => {
  let currentProject;
  const displayTasks = projectObject => {
    for (let project of projects.projectsList) {
      if (projectObject.title === project.title) {
        currentProject = project;
        tasks.populateTaskSection(project.tasks);
      }
    }
  };

  const deleteTask = taskObject => {
    for (let project of projects.projectsList) {
      if (currentProject.title === project.title) {
        project.tasks.splice(project.tasks.indexOf(taskObject), 1);
        currentProject = project;
        const projectElementsContainer = document.getElementById("projects");
        let projectElementsCreated =
          projectElementsContainer.querySelectorAll(".project");
        projectElementsCreated.forEach(projectElement => {
          if (projectElement.id === currentProject.title) {
            let tasksNum = projectElement.querySelector(".project-items");
            tasksNum.textContent = +tasksNum.textContent - 1;
          }
        });
      }
    }

    tasks.populateTaskSection(currentProject.tasks);
  };

  return {
    displayTasks,
    currentProject,
    deleteTask,
  };
})();

export default displayController;
