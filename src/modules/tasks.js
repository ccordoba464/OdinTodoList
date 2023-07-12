import displayController from "./display-controller";
import projects from "./projects";
import { format, parseISO } from "date-fns";

const projectTasks = (() => {
  const projectTasksElement = document.getElementById("project-tasks");

  const tasks = (title, description, dueDate, priority) => {
    dueDate = format(parseISO(dueDate), "MMM dd yyyy");
    return { title, description, dueDate, priority };
  };

  const createTask = (title, description, dueDate, priority) => {
    let taskObject = tasks(title, description, dueDate, priority);
    for (let project of projects.projectsList) {
      if (displayController.currentProject.title === project.title) {
        project.tasks.push(taskObject);
        populateTaskSection(project.tasks);
      }
    }
  };

  const createTaskElement = task => {
    let newTask = document.createElement("div");
    newTask.classList.add("task");

    let taskTitle = document.createElement("div");
    taskTitle.classList.add("task-title");
    taskTitle.textContent = task.title;
    let taskDescription = document.createElement("div");
    taskDescription.classList.add("task-description");
    taskDescription.textContent = task.description;
    let taskDate = document.createElement("div");
    taskDate.classList.add("task-date");
    taskDate.textContent = task.dueDate;

    newTask.append(taskTitle, taskDescription, taskDate);

    return newTask;
  };

  const populateTaskSection = projectTasks => {
    while (projectTasksElement.firstChild) {
      projectTasksElement.firstChild.remove();
    }
    for (let task of projectTasks) {
      let taskElement = createTaskElement(task);
      projectTasksElement.appendChild(taskElement);
    }
  };

  return { createTaskElement, populateTaskSection, createTask };
})();

export default projectTasks;
