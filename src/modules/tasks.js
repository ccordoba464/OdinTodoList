import displayController from "./display-controller";
import projects from "./projects";
import { format, parseISO } from "date-fns";

const projectTasks = (() => {
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
      taskElement.addEventListener("click", () => {
        let expandedTask = expandTask(task);
        const body = document.querySelector("body");
        body.append(expandedTask);
      });
      projectTasksElement.appendChild(taskElement);
    }
  };

  const expandTask = taskObject => {
    const expandedTask = document.createElement("div");
    expandedTask.id = taskObject.title;
    expandedTask.classList.add("expanded-task");

    const contentContainer = document.createElement("div");
    contentContainer.classList.add("content-container");

    const taskTitle = document.createElement("div");
    taskTitle.id = "task-title";
    taskTitle.textContent = taskObject.title;

    const taskDescription = document.createElement("div");
    taskDescription.id = "task-description";
    taskDescription.textContent = taskObject.description;

    contentContainer.append(taskTitle, taskDescription);

    const detailsContainer = document.createElement("div");
    detailsContainer.classList.add("details-container");

    const taskPriority = document.createElement("div");
    taskPriority.id = "task-priority";
    taskPriority.textContent = "Priority: " + taskObject.priority;

    const taskDate = document.createElement("div");
    taskDate.id = "task-date";
    taskDate.textContent = "Due: " + taskObject.dueDate;

    const taskProject = document.createElement("div");
    taskProject.id = "task-project";
    taskProject.textContent = "Project: " + "N/A";

    const deleteTaskButton = document.createElement("button");
    deleteTaskButton.id = "delete-task-button";
    deleteTaskButton.textContent = "Delete Task";

    detailsContainer.append(
      taskPriority,
      taskDate,
      taskProject,
      deleteTaskButton
    );

    deleteTaskButton.addEventListener("click", () => {
      expandedTask.remove();
      displayController.deleteTask(taskObject);
    });

    expandedTask.append(contentContainer, detailsContainer);

    return expandedTask;
  };

  return { createTaskElement, populateTaskSection, createTask, expandTask };
})();

export default projectTasks;
