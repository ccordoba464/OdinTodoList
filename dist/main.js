/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/display-controller.js":
/*!*******************************************!*\
  !*** ./src/modules/display-controller.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ "./src/modules/projects.js");
/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tasks */ "./src/modules/tasks.js");



const displayController = (() => {
  const displayTasks = projectObject => {
    for (let project of _projects__WEBPACK_IMPORTED_MODULE_0__["default"].projectsList) {
      if (projectObject.title === project.title) {
        _tasks__WEBPACK_IMPORTED_MODULE_1__["default"].populateTaskSection(project.tasks);
      }
    }
  };

  const createProjectForm = () => {
    const projectForm = document.createElement("form");
    projectForm.id = "project-form";
    const formTitle = document.createElement("div");
    formTitle.id = "form-title";
    formTitle.textContent = "Add Project";
    const nameTitle = document.createElement("div");
    nameTitle.classList.add("title");
    nameTitle.textContent = "Name";
    const nameInput = document.createElement("input");
    nameInput.setAttribute("required", "true");
    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("button-container");
    const cancelButton = document.createElement("button");
    cancelButton.id = "form-button";
    cancelButton.type = "button";
    cancelButton.textContent = "Cancel";
    const submitButton = document.createElement("button");
    submitButton.id = "form-button";
    submitButton.type = "button";
    submitButton.textContent = "Add";
    buttonContainer.append(cancelButton, submitButton);
    projectForm.append(formTitle, nameTitle, nameInput, buttonContainer);

    submitButton.addEventListener("click", () => {
      if (nameInput.checkValidity()) {
        _projects__WEBPACK_IMPORTED_MODULE_0__["default"].createProject(nameInput.value);
        projectForm.remove();
      } else {
        alert("Enter Project Name");
      }
    });

    cancelButton.addEventListener("click", () => {
      projectForm.remove();
    });

    return projectForm;
  };

  const createTaskForm = () => {
    const taskForm = document.createElement("form");
    taskForm.id = "task-form";
    const formTitle = document.createElement("div");
    formTitle.id = "form-title";
    formTitle.textContent = "Add Task";

    const nameContainer = document.createElement("div");
    const nameTitle = document.createElement("div");
    nameTitle.classList.add("title");
    nameTitle.textContent = "Task Name";
    const nameInput = document.createElement("input");
    nameInput.setAttribute("required", "true");
    nameContainer.append(nameTitle, nameInput);

    const descriptionContainer = document.createElement("div");
    const descriptionTitle = document.createElement("div");
    descriptionTitle.classList.add("title");
    descriptionTitle.textContent = "Description";
    const descriptionInput = document.createElement("input");
    descriptionInput.setAttribute("required", "true");
    descriptionContainer.append(descriptionTitle, descriptionInput);

    const dateContainer = document.createElement("div");
    const dateTitle = document.createElement("div");
    dateTitle.classList.add("title");
    dateTitle.textContent = "Due Date";
    const dateInput = document.createElement("input");
    dateInput.type = "date";
    dateInput.setAttribute("required", "true");
    dateContainer.append(dateTitle, dateInput);

    const priorityContainer = document.createElement("div");
    const priorityTitle = document.createElement("div");
    priorityTitle.classList.add("title");
    priorityTitle.textContent = "Priority";
    const priorityInput = document.createElement("input");
    priorityInput.setAttribute("required", "true");
    priorityContainer.append(priorityTitle, priorityInput);

    const inputContainer = document.createElement("div");
    inputContainer.classList.add("input-container");
    inputContainer.append(dateContainer, priorityContainer);

    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("button-container");
    const cancelButton = document.createElement("button");
    cancelButton.id = "form-button";
    cancelButton.type = "button";
    cancelButton.textContent = "Cancel";
    const submitButton = document.createElement("button");
    submitButton.id = "form-button";
    submitButton.type = "button";
    submitButton.textContent = "Add";

    buttonContainer.append(cancelButton, submitButton);
    taskForm.append(
      formTitle,
      nameContainer,
      descriptionContainer,
      inputContainer,
      buttonContainer
    );

    submitButton.addEventListener("click", () => {
      if (nameInput.checkValidity()) {
        _projects__WEBPACK_IMPORTED_MODULE_0__["default"].createProject(nameInput.value);
        taskForm.remove();
      } else {
        alert("Enter Project Name");
      }
    });

    cancelButton.addEventListener("click", () => {
      taskForm.remove();
    });

    return taskForm;
  };

  return { displayTasks, createProjectForm, createTaskForm };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayController);


/***/ }),

/***/ "./src/modules/projects.js":
/*!*********************************!*\
  !*** ./src/modules/projects.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _display_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./display-controller */ "./src/modules/display-controller.js");


const projects = (() => {
  const projectsContainer = document.getElementById("projects");
  let projectsList = [];

  const project = title => {
    let tasks = [];
    return { title, tasks };
  };

  const createProject = title => {
    let projectObject = project(title);
    projectsList.push(projectObject);
    let projectElement = createProjectElement(projectObject);
    projectElement.addEventListener(
      "click",
      _display_controller__WEBPACK_IMPORTED_MODULE_0__["default"].displayTasks(projectObject)
    );
    projectsContainer.append(projectElement);
  };

  const createProjectElement = project => {
    let newProject = document.createElement("div");
    newProject.classList.add("project");

    let projectTitle = document.createElement("div");
    projectTitle.classList.add("project-title");
    projectTitle.textContent = project.title;
    let projectItems = document.createElement("div");
    projectItems.classList.add("project-items");
    projectItems.textContent = project.tasks.length;

    newProject.append(projectTitle, projectItems);

    return newProject;
  };

  return { projectsList, createProject };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projects);


/***/ }),

/***/ "./src/modules/tasks.js":
/*!******************************!*\
  !*** ./src/modules/tasks.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const projectTasks = (() => {
  const projectTasksElement = document.getElementById("project-tasks");

  const tasks = (title, description, dueDate, priority) => {
    return { title, description, dueDate, priority };
  };

  const createTask = (title, description, dueDate, priority) => {
    let task = tasks(title, description, dueDate, priority);
    createTaskElement(task);
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
    for (let tasks of projectTasks) {
      let taskElement = createTask(tasks);
      projectTasksElement.appendChild(taskElement);
    }
  };

  return { createTaskElement, populateTaskSection };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projectTasks);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_display_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/display-controller */ "./src/modules/display-controller.js");
/* harmony import */ var _modules_projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/projects */ "./src/modules/projects.js");



init();

function addButtonListeners() {
  const addProjectButton = document.getElementById("add-project");
  addProjectButton.addEventListener("click", () => {
    if (!document.getElementById("project-form")) {
      const body = document.querySelector("body");
      let form = _modules_display_controller__WEBPACK_IMPORTED_MODULE_0__["default"].createProjectForm();
      form.focus();
      body.append(form);
    }
  });
  const addTasksButton = document.getElementById("add-task");
  addTasksButton.addEventListener("click", () => {
    if (!document.getElementById("task-form")) {
      const body = document.querySelector("body");
      let form = _modules_display_controller__WEBPACK_IMPORTED_MODULE_0__["default"].createTaskForm();
      body.append(form);
    }
  });
}

function init() {
  addButtonListeners();
  _modules_projects__WEBPACK_IMPORTED_MODULE_1__["default"].createProject("To-do");
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQWtDO0FBQ0M7O0FBRW5DO0FBQ0E7QUFDQSx3QkFBd0IsaURBQVE7QUFDaEM7QUFDQSxRQUFRLDhDQUFZO0FBQ3BCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxRQUFRLGlEQUFRO0FBQ2hCO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFFBQVEsaURBQVE7QUFDaEI7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQSxXQUFXO0FBQ1gsQ0FBQzs7QUFFRCxpRUFBZSxpQkFBaUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZJb0I7O0FBRXJEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sMkRBQWlCO0FBQ3ZCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsV0FBVztBQUNYLENBQUM7O0FBRUQsaUVBQWUsUUFBUSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUN6Q3hCO0FBQ0E7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1gsQ0FBQzs7QUFFRCxpRUFBZSxZQUFZLEVBQUM7Ozs7Ozs7VUM1QzVCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTjZEO0FBQ25COztBQUUxQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLG1FQUFpQjtBQUNsQztBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsbUVBQWlCO0FBQ2xDO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBLEVBQUUseURBQVE7QUFDViIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW50b2RvbGlzdC8uL3NyYy9tb2R1bGVzL2Rpc3BsYXktY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9vZGludG9kb2xpc3QvLi9zcmMvbW9kdWxlcy9wcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly9vZGludG9kb2xpc3QvLi9zcmMvbW9kdWxlcy90YXNrcy5qcyIsIndlYnBhY2s6Ly9vZGludG9kb2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2RpbnRvZG9saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGludG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGludG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGludG9kb2xpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHByb2plY3RzIGZyb20gXCIuL3Byb2plY3RzXCI7XG5pbXBvcnQgcHJvamVjdFRhc2tzIGZyb20gXCIuL3Rhc2tzXCI7XG5cbmNvbnN0IGRpc3BsYXlDb250cm9sbGVyID0gKCgpID0+IHtcbiAgY29uc3QgZGlzcGxheVRhc2tzID0gcHJvamVjdE9iamVjdCA9PiB7XG4gICAgZm9yIChsZXQgcHJvamVjdCBvZiBwcm9qZWN0cy5wcm9qZWN0c0xpc3QpIHtcbiAgICAgIGlmIChwcm9qZWN0T2JqZWN0LnRpdGxlID09PSBwcm9qZWN0LnRpdGxlKSB7XG4gICAgICAgIHByb2plY3RUYXNrcy5wb3B1bGF0ZVRhc2tTZWN0aW9uKHByb2plY3QudGFza3MpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBjb25zdCBjcmVhdGVQcm9qZWN0Rm9ybSA9ICgpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICAgIHByb2plY3RGb3JtLmlkID0gXCJwcm9qZWN0LWZvcm1cIjtcbiAgICBjb25zdCBmb3JtVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGZvcm1UaXRsZS5pZCA9IFwiZm9ybS10aXRsZVwiO1xuICAgIGZvcm1UaXRsZS50ZXh0Q29udGVudCA9IFwiQWRkIFByb2plY3RcIjtcbiAgICBjb25zdCBuYW1lVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG5hbWVUaXRsZS5jbGFzc0xpc3QuYWRkKFwidGl0bGVcIik7XG4gICAgbmFtZVRpdGxlLnRleHRDb250ZW50ID0gXCJOYW1lXCI7XG4gICAgY29uc3QgbmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIG5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJyZXF1aXJlZFwiLCBcInRydWVcIik7XG4gICAgY29uc3QgYnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBidXR0b25Db250YWluZXIuY2xhc3NMaXN0LmFkZChcImJ1dHRvbi1jb250YWluZXJcIik7XG4gICAgY29uc3QgY2FuY2VsQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBjYW5jZWxCdXR0b24uaWQgPSBcImZvcm0tYnV0dG9uXCI7XG4gICAgY2FuY2VsQnV0dG9uLnR5cGUgPSBcImJ1dHRvblwiO1xuICAgIGNhbmNlbEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQ2FuY2VsXCI7XG4gICAgY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBzdWJtaXRCdXR0b24uaWQgPSBcImZvcm0tYnV0dG9uXCI7XG4gICAgc3VibWl0QnV0dG9uLnR5cGUgPSBcImJ1dHRvblwiO1xuICAgIHN1Ym1pdEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQWRkXCI7XG4gICAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZChjYW5jZWxCdXR0b24sIHN1Ym1pdEJ1dHRvbik7XG4gICAgcHJvamVjdEZvcm0uYXBwZW5kKGZvcm1UaXRsZSwgbmFtZVRpdGxlLCBuYW1lSW5wdXQsIGJ1dHRvbkNvbnRhaW5lcik7XG5cbiAgICBzdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGlmIChuYW1lSW5wdXQuY2hlY2tWYWxpZGl0eSgpKSB7XG4gICAgICAgIHByb2plY3RzLmNyZWF0ZVByb2plY3QobmFtZUlucHV0LnZhbHVlKTtcbiAgICAgICAgcHJvamVjdEZvcm0ucmVtb3ZlKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhbGVydChcIkVudGVyIFByb2plY3QgTmFtZVwiKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgcHJvamVjdEZvcm0ucmVtb3ZlKCk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcHJvamVjdEZvcm07XG4gIH07XG5cbiAgY29uc3QgY3JlYXRlVGFza0Zvcm0gPSAoKSA9PiB7XG4gICAgY29uc3QgdGFza0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgICB0YXNrRm9ybS5pZCA9IFwidGFzay1mb3JtXCI7XG4gICAgY29uc3QgZm9ybVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBmb3JtVGl0bGUuaWQgPSBcImZvcm0tdGl0bGVcIjtcbiAgICBmb3JtVGl0bGUudGV4dENvbnRlbnQgPSBcIkFkZCBUYXNrXCI7XG5cbiAgICBjb25zdCBuYW1lQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBuYW1lVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG5hbWVUaXRsZS5jbGFzc0xpc3QuYWRkKFwidGl0bGVcIik7XG4gICAgbmFtZVRpdGxlLnRleHRDb250ZW50ID0gXCJUYXNrIE5hbWVcIjtcbiAgICBjb25zdCBuYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgbmFtZUlucHV0LnNldEF0dHJpYnV0ZShcInJlcXVpcmVkXCIsIFwidHJ1ZVwiKTtcbiAgICBuYW1lQ29udGFpbmVyLmFwcGVuZChuYW1lVGl0bGUsIG5hbWVJbnB1dCk7XG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgZGVzY3JpcHRpb25UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGVzY3JpcHRpb25UaXRsZS5jbGFzc0xpc3QuYWRkKFwidGl0bGVcIik7XG4gICAgZGVzY3JpcHRpb25UaXRsZS50ZXh0Q29udGVudCA9IFwiRGVzY3JpcHRpb25cIjtcbiAgICBjb25zdCBkZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGRlc2NyaXB0aW9uSW5wdXQuc2V0QXR0cmlidXRlKFwicmVxdWlyZWRcIiwgXCJ0cnVlXCIpO1xuICAgIGRlc2NyaXB0aW9uQ29udGFpbmVyLmFwcGVuZChkZXNjcmlwdGlvblRpdGxlLCBkZXNjcmlwdGlvbklucHV0KTtcblxuICAgIGNvbnN0IGRhdGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGRhdGVUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGF0ZVRpdGxlLmNsYXNzTGlzdC5hZGQoXCJ0aXRsZVwiKTtcbiAgICBkYXRlVGl0bGUudGV4dENvbnRlbnQgPSBcIkR1ZSBEYXRlXCI7XG4gICAgY29uc3QgZGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGRhdGVJbnB1dC50eXBlID0gXCJkYXRlXCI7XG4gICAgZGF0ZUlucHV0LnNldEF0dHJpYnV0ZShcInJlcXVpcmVkXCIsIFwidHJ1ZVwiKTtcbiAgICBkYXRlQ29udGFpbmVyLmFwcGVuZChkYXRlVGl0bGUsIGRhdGVJbnB1dCk7XG5cbiAgICBjb25zdCBwcmlvcml0eUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgcHJpb3JpdHlUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcHJpb3JpdHlUaXRsZS5jbGFzc0xpc3QuYWRkKFwidGl0bGVcIik7XG4gICAgcHJpb3JpdHlUaXRsZS50ZXh0Q29udGVudCA9IFwiUHJpb3JpdHlcIjtcbiAgICBjb25zdCBwcmlvcml0eUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIHByaW9yaXR5SW5wdXQuc2V0QXR0cmlidXRlKFwicmVxdWlyZWRcIiwgXCJ0cnVlXCIpO1xuICAgIHByaW9yaXR5Q29udGFpbmVyLmFwcGVuZChwcmlvcml0eVRpdGxlLCBwcmlvcml0eUlucHV0KTtcblxuICAgIGNvbnN0IGlucHV0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBpbnB1dENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiaW5wdXQtY29udGFpbmVyXCIpO1xuICAgIGlucHV0Q29udGFpbmVyLmFwcGVuZChkYXRlQ29udGFpbmVyLCBwcmlvcml0eUNvbnRhaW5lcik7XG5cbiAgICBjb25zdCBidXR0b25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGJ1dHRvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiYnV0dG9uLWNvbnRhaW5lclwiKTtcbiAgICBjb25zdCBjYW5jZWxCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGNhbmNlbEJ1dHRvbi5pZCA9IFwiZm9ybS1idXR0b25cIjtcbiAgICBjYW5jZWxCdXR0b24udHlwZSA9IFwiYnV0dG9uXCI7XG4gICAgY2FuY2VsQnV0dG9uLnRleHRDb250ZW50ID0gXCJDYW5jZWxcIjtcbiAgICBjb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIHN1Ym1pdEJ1dHRvbi5pZCA9IFwiZm9ybS1idXR0b25cIjtcbiAgICBzdWJtaXRCdXR0b24udHlwZSA9IFwiYnV0dG9uXCI7XG4gICAgc3VibWl0QnV0dG9uLnRleHRDb250ZW50ID0gXCJBZGRcIjtcblxuICAgIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmQoY2FuY2VsQnV0dG9uLCBzdWJtaXRCdXR0b24pO1xuICAgIHRhc2tGb3JtLmFwcGVuZChcbiAgICAgIGZvcm1UaXRsZSxcbiAgICAgIG5hbWVDb250YWluZXIsXG4gICAgICBkZXNjcmlwdGlvbkNvbnRhaW5lcixcbiAgICAgIGlucHV0Q29udGFpbmVyLFxuICAgICAgYnV0dG9uQ29udGFpbmVyXG4gICAgKTtcblxuICAgIHN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgaWYgKG5hbWVJbnB1dC5jaGVja1ZhbGlkaXR5KCkpIHtcbiAgICAgICAgcHJvamVjdHMuY3JlYXRlUHJvamVjdChuYW1lSW5wdXQudmFsdWUpO1xuICAgICAgICB0YXNrRm9ybS5yZW1vdmUoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFsZXJ0KFwiRW50ZXIgUHJvamVjdCBOYW1lXCIpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICB0YXNrRm9ybS5yZW1vdmUoKTtcbiAgICB9KTtcblxuICAgIHJldHVybiB0YXNrRm9ybTtcbiAgfTtcblxuICByZXR1cm4geyBkaXNwbGF5VGFza3MsIGNyZWF0ZVByb2plY3RGb3JtLCBjcmVhdGVUYXNrRm9ybSB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgZGlzcGxheUNvbnRyb2xsZXI7XG4iLCJpbXBvcnQgZGlzcGxheUNvbnRyb2xsZXIgZnJvbSBcIi4vZGlzcGxheS1jb250cm9sbGVyXCI7XG5cbmNvbnN0IHByb2plY3RzID0gKCgpID0+IHtcbiAgY29uc3QgcHJvamVjdHNDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RzXCIpO1xuICBsZXQgcHJvamVjdHNMaXN0ID0gW107XG5cbiAgY29uc3QgcHJvamVjdCA9IHRpdGxlID0+IHtcbiAgICBsZXQgdGFza3MgPSBbXTtcbiAgICByZXR1cm4geyB0aXRsZSwgdGFza3MgfTtcbiAgfTtcblxuICBjb25zdCBjcmVhdGVQcm9qZWN0ID0gdGl0bGUgPT4ge1xuICAgIGxldCBwcm9qZWN0T2JqZWN0ID0gcHJvamVjdCh0aXRsZSk7XG4gICAgcHJvamVjdHNMaXN0LnB1c2gocHJvamVjdE9iamVjdCk7XG4gICAgbGV0IHByb2plY3RFbGVtZW50ID0gY3JlYXRlUHJvamVjdEVsZW1lbnQocHJvamVjdE9iamVjdCk7XG4gICAgcHJvamVjdEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgIFwiY2xpY2tcIixcbiAgICAgIGRpc3BsYXlDb250cm9sbGVyLmRpc3BsYXlUYXNrcyhwcm9qZWN0T2JqZWN0KVxuICAgICk7XG4gICAgcHJvamVjdHNDb250YWluZXIuYXBwZW5kKHByb2plY3RFbGVtZW50KTtcbiAgfTtcblxuICBjb25zdCBjcmVhdGVQcm9qZWN0RWxlbWVudCA9IHByb2plY3QgPT4ge1xuICAgIGxldCBuZXdQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBuZXdQcm9qZWN0LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0XCIpO1xuXG4gICAgbGV0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcHJvamVjdFRpdGxlLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LXRpdGxlXCIpO1xuICAgIHByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9IHByb2plY3QudGl0bGU7XG4gICAgbGV0IHByb2plY3RJdGVtcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcHJvamVjdEl0ZW1zLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWl0ZW1zXCIpO1xuICAgIHByb2plY3RJdGVtcy50ZXh0Q29udGVudCA9IHByb2plY3QudGFza3MubGVuZ3RoO1xuXG4gICAgbmV3UHJvamVjdC5hcHBlbmQocHJvamVjdFRpdGxlLCBwcm9qZWN0SXRlbXMpO1xuXG4gICAgcmV0dXJuIG5ld1Byb2plY3Q7XG4gIH07XG5cbiAgcmV0dXJuIHsgcHJvamVjdHNMaXN0LCBjcmVhdGVQcm9qZWN0IH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBwcm9qZWN0cztcbiIsImNvbnN0IHByb2plY3RUYXNrcyA9ICgoKSA9PiB7XG4gIGNvbnN0IHByb2plY3RUYXNrc0VsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtdGFza3NcIik7XG5cbiAgY29uc3QgdGFza3MgPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkgPT4ge1xuICAgIHJldHVybiB7IHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkgfTtcbiAgfTtcblxuICBjb25zdCBjcmVhdGVUYXNrID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpID0+IHtcbiAgICBsZXQgdGFzayA9IHRhc2tzKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpO1xuICAgIGNyZWF0ZVRhc2tFbGVtZW50KHRhc2spO1xuICB9O1xuXG4gIGNvbnN0IGNyZWF0ZVRhc2tFbGVtZW50ID0gdGFzayA9PiB7XG4gICAgbGV0IG5ld1Rhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG5ld1Rhc2suY2xhc3NMaXN0LmFkZChcInRhc2tcIik7XG5cbiAgICBsZXQgdGFza1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0YXNrVGl0bGUuY2xhc3NMaXN0LmFkZChcInRhc2stdGl0bGVcIik7XG4gICAgdGFza1RpdGxlLnRleHRDb250ZW50ID0gdGFzay50aXRsZTtcbiAgICBsZXQgdGFza0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0YXNrRGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZChcInRhc2stZGVzY3JpcHRpb25cIik7XG4gICAgdGFza0Rlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gdGFzay5kZXNjcmlwdGlvbjtcbiAgICBsZXQgdGFza0RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRhc2tEYXRlLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWRhdGVcIik7XG4gICAgdGFza0RhdGUudGV4dENvbnRlbnQgPSB0YXNrLmR1ZURhdGU7XG5cbiAgICBuZXdUYXNrLmFwcGVuZCh0YXNrVGl0bGUsIHRhc2tEZXNjcmlwdGlvbiwgdGFza0RhdGUpO1xuXG4gICAgcmV0dXJuIG5ld1Rhc2s7XG4gIH07XG5cbiAgY29uc3QgcG9wdWxhdGVUYXNrU2VjdGlvbiA9IHByb2plY3RUYXNrcyA9PiB7XG4gICAgd2hpbGUgKHByb2plY3RUYXNrc0VsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgcHJvamVjdFRhc2tzRWxlbWVudC5maXJzdENoaWxkLnJlbW92ZSgpO1xuICAgIH1cbiAgICBmb3IgKGxldCB0YXNrcyBvZiBwcm9qZWN0VGFza3MpIHtcbiAgICAgIGxldCB0YXNrRWxlbWVudCA9IGNyZWF0ZVRhc2sodGFza3MpO1xuICAgICAgcHJvamVjdFRhc2tzRWxlbWVudC5hcHBlbmRDaGlsZCh0YXNrRWxlbWVudCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB7IGNyZWF0ZVRhc2tFbGVtZW50LCBwb3B1bGF0ZVRhc2tTZWN0aW9uIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBwcm9qZWN0VGFza3M7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBkaXNwbGF5Q29udHJvbGxlciBmcm9tIFwiLi9tb2R1bGVzL2Rpc3BsYXktY29udHJvbGxlclwiO1xuaW1wb3J0IHByb2plY3RzIGZyb20gXCIuL21vZHVsZXMvcHJvamVjdHNcIjtcblxuaW5pdCgpO1xuXG5mdW5jdGlvbiBhZGRCdXR0b25MaXN0ZW5lcnMoKSB7XG4gIGNvbnN0IGFkZFByb2plY3RCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZC1wcm9qZWN0XCIpO1xuICBhZGRQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgaWYgKCFkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtZm9ybVwiKSkge1xuICAgICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuICAgICAgbGV0IGZvcm0gPSBkaXNwbGF5Q29udHJvbGxlci5jcmVhdGVQcm9qZWN0Rm9ybSgpO1xuICAgICAgZm9ybS5mb2N1cygpO1xuICAgICAgYm9keS5hcHBlbmQoZm9ybSk7XG4gICAgfVxuICB9KTtcbiAgY29uc3QgYWRkVGFza3NCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZC10YXNrXCIpO1xuICBhZGRUYXNrc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGlmICghZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLWZvcm1cIikpIHtcbiAgICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbiAgICAgIGxldCBmb3JtID0gZGlzcGxheUNvbnRyb2xsZXIuY3JlYXRlVGFza0Zvcm0oKTtcbiAgICAgIGJvZHkuYXBwZW5kKGZvcm0pO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGluaXQoKSB7XG4gIGFkZEJ1dHRvbkxpc3RlbmVycygpO1xuICBwcm9qZWN0cy5jcmVhdGVQcm9qZWN0KFwiVG8tZG9cIik7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=