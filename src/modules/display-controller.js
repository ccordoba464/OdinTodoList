import projectsManager from "./projects-manager";
import tasks from "./tasks";

const displayController = (() => {
  const displayTasks = projectObject => {
    for (let project of projectsManager.projectsList) {
      if (projectObject.title === project.title) {
        projectsManager.selectedProject = project;
        tasks.populateTaskSection(project.tasks);
      }
    }
  };

  const deleteTask = taskObject => {
    for (let project of projectsManager.projectsList) {
      if (projectsManager.selectedProject.title === project.title) {
        project.tasks.splice(project.tasks.indexOf(taskObject), 1);
        projectsManager.selectedProject = project;
        const projectElementsContainer = document.getElementById("projects");
        let projectElementsCreated =
          projectElementsContainer.querySelectorAll(".project");
        projectElementsCreated.forEach(projectElement => {
          if (projectElement.id === projectsManager.selectedProject.title) {
            let tasksNum = projectElement.querySelector(".project-items");
            tasksNum.textContent = +tasksNum.textContent - 1;
          }
        });
      }
    }

    tasks.populateTaskSection(projectsManager.selectedProject.tasks);
  };

  return {
    displayTasks,
    deleteTask,
  };
})();

export default displayController;
