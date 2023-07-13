import displayController from "./display-controller";
import projects from "./projects-manager";
import elementCreation from "./element-creation";
import { format, parseISO } from "date-fns";

const tasks = (() => {
  const projectTasksElement = document.getElementById("project-tasks");

  const tasks = (title, description, dueDate, priority) => {
    if (dueDate) dueDate = format(parseISO(dueDate), "MMM dd yyyy");
    return { title, description, dueDate, priority };
  };

  const createTask = (title, description, dueDate, priority) => {
    let taskObject = tasks(title, description, dueDate, priority);

    for (let project of projects.projectsList) {
      if (displayController.currentProject.title === project.title) {
        const projectsContainer = document.getElementById("projects");
        let projectsCreated = projectsContainer.querySelectorAll(".project");
        projectsCreated.forEach(project => {
          if (project.id === displayController.currentProject.title) {
            let tasksNum = project.querySelector(".project-items");
            tasksNum.textContent = +tasksNum.textContent + 1;
          }
        });
        project.tasks.push(taskObject);
        populateTaskSection(project.tasks);
      }
    }
  };

  const populateTaskSection = projectTasks => {
    while (projectTasksElement.firstChild) {
      projectTasksElement.firstChild.remove();
    }
    for (let task of projectTasks) {
      let taskElement = elementCreation.createTaskElement(task);
      taskElement.addEventListener("click", () => {
        let expandedTask = elementCreation.expandTask(task);
        const body = document.querySelector("body");
        body.append(expandedTask);
      });
      projectTasksElement.appendChild(taskElement);
    }
  };

  return { populateTaskSection, createTask };
})();

export default tasks;
