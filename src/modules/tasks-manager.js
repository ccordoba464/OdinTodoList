import projectsManager from "./projects-manager";
import elementCreation from "./element-creation";
import { format, parseISO } from "date-fns";

const tasksManager = (() => {
  const projectTasksContainer = document.getElementById("project-tasks");

  const tasks = (title, description, dueDate, priority) => {
    if (dueDate) dueDate = format(parseISO(dueDate), "MMM dd yyyy");
    return { title, description, dueDate, priority };
  };

  const createTask = (title, description, dueDate, priority) => {
    let taskObject = tasks(title, description, dueDate, priority);

    for (let project of projectsManager.projectsList) {
      if (projectsManager.selectedProject.title === project.title) {
        project.tasks.push(taskObject);
        projectsManager.selectedProject = project;
        populateTaskSection(project.tasks);

        const projectElementsContainer = document.getElementById("projects");
        let projectElementsCreated =
          projectElementsContainer.querySelectorAll(".project");
        projectElementsCreated.forEach(projectElement => {
          if (projectElement.id === projectsManager.selectedProject.title) {
            let tasksNum = projectElement.querySelector(".project-items");
            tasksNum.textContent = +tasksNum.textContent + 1;
          }
        });
      }
    }
  };

  const deleteTask = taskObject => {
    console.log(projectsManager.selectedProject);
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

    tasksManager.populateTaskSection(projectsManager.selectedProject.tasks);
  };

  const populateTaskSection = projectTasks => {
    while (projectTasksContainer.firstChild) {
      projectTasksContainer.firstChild.remove();
    }

    for (let taskObject of projectTasks) {
      let taskElement = elementCreation.createTaskElement(taskObject);
      projectTasksContainer.appendChild(taskElement);
    }
  };

  return { createTask, deleteTask, populateTaskSection };
})();

export default tasksManager;
