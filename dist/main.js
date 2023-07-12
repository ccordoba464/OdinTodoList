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
    nameTitle.id = "name-title";
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

  const createTaskForm = () => {};

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
    _modules_display_controller__WEBPACK_IMPORTED_MODULE_0__["default"].createTaskForm();
  });
}

function init() {
  addButtonListeners();
  _modules_projects__WEBPACK_IMPORTED_MODULE_1__["default"].createProject("To-do");
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQWtDO0FBQ0M7O0FBRW5DO0FBQ0E7QUFDQSx3QkFBd0IsaURBQVE7QUFDaEM7QUFDQSxRQUFRLDhDQUFZO0FBQ3BCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxRQUFRLGlEQUFRO0FBQ2hCO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7O0FBRUEsV0FBVztBQUNYLENBQUM7O0FBRUQsaUVBQWUsaUJBQWlCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6RG9COztBQUVyRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLDJEQUFpQjtBQUN2QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLFdBQVc7QUFDWCxDQUFDOztBQUVELGlFQUFlLFFBQVEsRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDekN4QjtBQUNBOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYLENBQUM7O0FBRUQsaUVBQWUsWUFBWSxFQUFDOzs7Ozs7O1VDNUM1QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ042RDtBQUNuQjs7QUFFMUM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixtRUFBaUI7QUFDbEM7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxJQUFJLG1FQUFpQjtBQUNyQixHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBLEVBQUUseURBQVE7QUFDViIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW50b2RvbGlzdC8uL3NyYy9tb2R1bGVzL2Rpc3BsYXktY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9vZGludG9kb2xpc3QvLi9zcmMvbW9kdWxlcy9wcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly9vZGludG9kb2xpc3QvLi9zcmMvbW9kdWxlcy90YXNrcy5qcyIsIndlYnBhY2s6Ly9vZGludG9kb2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2RpbnRvZG9saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGludG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGludG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGludG9kb2xpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHByb2plY3RzIGZyb20gXCIuL3Byb2plY3RzXCI7XG5pbXBvcnQgcHJvamVjdFRhc2tzIGZyb20gXCIuL3Rhc2tzXCI7XG5cbmNvbnN0IGRpc3BsYXlDb250cm9sbGVyID0gKCgpID0+IHtcbiAgY29uc3QgZGlzcGxheVRhc2tzID0gcHJvamVjdE9iamVjdCA9PiB7XG4gICAgZm9yIChsZXQgcHJvamVjdCBvZiBwcm9qZWN0cy5wcm9qZWN0c0xpc3QpIHtcbiAgICAgIGlmIChwcm9qZWN0T2JqZWN0LnRpdGxlID09PSBwcm9qZWN0LnRpdGxlKSB7XG4gICAgICAgIHByb2plY3RUYXNrcy5wb3B1bGF0ZVRhc2tTZWN0aW9uKHByb2plY3QudGFza3MpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBjb25zdCBjcmVhdGVQcm9qZWN0Rm9ybSA9ICgpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICAgIHByb2plY3RGb3JtLmlkID0gXCJwcm9qZWN0LWZvcm1cIjtcbiAgICBjb25zdCBmb3JtVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGZvcm1UaXRsZS5pZCA9IFwiZm9ybS10aXRsZVwiO1xuICAgIGZvcm1UaXRsZS50ZXh0Q29udGVudCA9IFwiQWRkIFByb2plY3RcIjtcbiAgICBjb25zdCBuYW1lVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG5hbWVUaXRsZS5pZCA9IFwibmFtZS10aXRsZVwiO1xuICAgIG5hbWVUaXRsZS50ZXh0Q29udGVudCA9IFwiTmFtZVwiO1xuICAgIGNvbnN0IG5hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBuYW1lSW5wdXQuc2V0QXR0cmlidXRlKFwicmVxdWlyZWRcIiwgXCJ0cnVlXCIpO1xuICAgIGNvbnN0IGJ1dHRvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYnV0dG9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJidXR0b24tY29udGFpbmVyXCIpO1xuICAgIGNvbnN0IGNhbmNlbEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgY2FuY2VsQnV0dG9uLmlkID0gXCJmb3JtLWJ1dHRvblwiO1xuICAgIGNhbmNlbEJ1dHRvbi50eXBlID0gXCJidXR0b25cIjtcbiAgICBjYW5jZWxCdXR0b24udGV4dENvbnRlbnQgPSBcIkNhbmNlbFwiO1xuICAgIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgc3VibWl0QnV0dG9uLmlkID0gXCJmb3JtLWJ1dHRvblwiO1xuICAgIHN1Ym1pdEJ1dHRvbi50eXBlID0gXCJidXR0b25cIjtcbiAgICBzdWJtaXRCdXR0b24udGV4dENvbnRlbnQgPSBcIkFkZFwiO1xuICAgIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmQoY2FuY2VsQnV0dG9uLCBzdWJtaXRCdXR0b24pO1xuICAgIHByb2plY3RGb3JtLmFwcGVuZChmb3JtVGl0bGUsIG5hbWVUaXRsZSwgbmFtZUlucHV0LCBidXR0b25Db250YWluZXIpO1xuXG4gICAgc3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBpZiAobmFtZUlucHV0LmNoZWNrVmFsaWRpdHkoKSkge1xuICAgICAgICBwcm9qZWN0cy5jcmVhdGVQcm9qZWN0KG5hbWVJbnB1dC52YWx1ZSk7XG4gICAgICAgIHByb2plY3RGb3JtLnJlbW92ZSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYWxlcnQoXCJFbnRlciBQcm9qZWN0IE5hbWVcIik7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIHByb2plY3RGb3JtLnJlbW92ZSgpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHByb2plY3RGb3JtO1xuICB9O1xuXG4gIGNvbnN0IGNyZWF0ZVRhc2tGb3JtID0gKCkgPT4ge307XG5cbiAgcmV0dXJuIHsgZGlzcGxheVRhc2tzLCBjcmVhdGVQcm9qZWN0Rm9ybSwgY3JlYXRlVGFza0Zvcm0gfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGRpc3BsYXlDb250cm9sbGVyO1xuIiwiaW1wb3J0IGRpc3BsYXlDb250cm9sbGVyIGZyb20gXCIuL2Rpc3BsYXktY29udHJvbGxlclwiO1xuXG5jb25zdCBwcm9qZWN0cyA9ICgoKSA9PiB7XG4gIGNvbnN0IHByb2plY3RzQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0c1wiKTtcbiAgbGV0IHByb2plY3RzTGlzdCA9IFtdO1xuXG4gIGNvbnN0IHByb2plY3QgPSB0aXRsZSA9PiB7XG4gICAgbGV0IHRhc2tzID0gW107XG4gICAgcmV0dXJuIHsgdGl0bGUsIHRhc2tzIH07XG4gIH07XG5cbiAgY29uc3QgY3JlYXRlUHJvamVjdCA9IHRpdGxlID0+IHtcbiAgICBsZXQgcHJvamVjdE9iamVjdCA9IHByb2plY3QodGl0bGUpO1xuICAgIHByb2plY3RzTGlzdC5wdXNoKHByb2plY3RPYmplY3QpO1xuICAgIGxldCBwcm9qZWN0RWxlbWVudCA9IGNyZWF0ZVByb2plY3RFbGVtZW50KHByb2plY3RPYmplY3QpO1xuICAgIHByb2plY3RFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICBcImNsaWNrXCIsXG4gICAgICBkaXNwbGF5Q29udHJvbGxlci5kaXNwbGF5VGFza3MocHJvamVjdE9iamVjdClcbiAgICApO1xuICAgIHByb2plY3RzQ29udGFpbmVyLmFwcGVuZChwcm9qZWN0RWxlbWVudCk7XG4gIH07XG5cbiAgY29uc3QgY3JlYXRlUHJvamVjdEVsZW1lbnQgPSBwcm9qZWN0ID0+IHtcbiAgICBsZXQgbmV3UHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbmV3UHJvamVjdC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdFwiKTtcblxuICAgIGxldCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHByb2plY3RUaXRsZS5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC10aXRsZVwiKTtcbiAgICBwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSBwcm9qZWN0LnRpdGxlO1xuICAgIGxldCBwcm9qZWN0SXRlbXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHByb2plY3RJdGVtcy5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1pdGVtc1wiKTtcbiAgICBwcm9qZWN0SXRlbXMudGV4dENvbnRlbnQgPSBwcm9qZWN0LnRhc2tzLmxlbmd0aDtcblxuICAgIG5ld1Byb2plY3QuYXBwZW5kKHByb2plY3RUaXRsZSwgcHJvamVjdEl0ZW1zKTtcblxuICAgIHJldHVybiBuZXdQcm9qZWN0O1xuICB9O1xuXG4gIHJldHVybiB7IHByb2plY3RzTGlzdCwgY3JlYXRlUHJvamVjdCB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgcHJvamVjdHM7XG4iLCJjb25zdCBwcm9qZWN0VGFza3MgPSAoKCkgPT4ge1xuICBjb25zdCBwcm9qZWN0VGFza3NFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LXRhc2tzXCIpO1xuXG4gIGNvbnN0IHRhc2tzID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpID0+IHtcbiAgICByZXR1cm4geyB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5IH07XG4gIH07XG5cbiAgY29uc3QgY3JlYXRlVGFzayA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSA9PiB7XG4gICAgbGV0IHRhc2sgPSB0YXNrcyh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KTtcbiAgICBjcmVhdGVUYXNrRWxlbWVudCh0YXNrKTtcbiAgfTtcblxuICBjb25zdCBjcmVhdGVUYXNrRWxlbWVudCA9IHRhc2sgPT4ge1xuICAgIGxldCBuZXdUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBuZXdUYXNrLmNsYXNzTGlzdC5hZGQoXCJ0YXNrXCIpO1xuXG4gICAgbGV0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGFza1RpdGxlLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLXRpdGxlXCIpO1xuICAgIHRhc2tUaXRsZS50ZXh0Q29udGVudCA9IHRhc2sudGl0bGU7XG4gICAgbGV0IHRhc2tEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGFza0Rlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWRlc2NyaXB0aW9uXCIpO1xuICAgIHRhc2tEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IHRhc2suZGVzY3JpcHRpb247XG4gICAgbGV0IHRhc2tEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0YXNrRGF0ZS5jbGFzc0xpc3QuYWRkKFwidGFzay1kYXRlXCIpO1xuICAgIHRhc2tEYXRlLnRleHRDb250ZW50ID0gdGFzay5kdWVEYXRlO1xuXG4gICAgbmV3VGFzay5hcHBlbmQodGFza1RpdGxlLCB0YXNrRGVzY3JpcHRpb24sIHRhc2tEYXRlKTtcblxuICAgIHJldHVybiBuZXdUYXNrO1xuICB9O1xuXG4gIGNvbnN0IHBvcHVsYXRlVGFza1NlY3Rpb24gPSBwcm9qZWN0VGFza3MgPT4ge1xuICAgIHdoaWxlIChwcm9qZWN0VGFza3NFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHByb2plY3RUYXNrc0VsZW1lbnQuZmlyc3RDaGlsZC5yZW1vdmUoKTtcbiAgICB9XG4gICAgZm9yIChsZXQgdGFza3Mgb2YgcHJvamVjdFRhc2tzKSB7XG4gICAgICBsZXQgdGFza0VsZW1lbnQgPSBjcmVhdGVUYXNrKHRhc2tzKTtcbiAgICAgIHByb2plY3RUYXNrc0VsZW1lbnQuYXBwZW5kQ2hpbGQodGFza0VsZW1lbnQpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4geyBjcmVhdGVUYXNrRWxlbWVudCwgcG9wdWxhdGVUYXNrU2VjdGlvbiB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgcHJvamVjdFRhc2tzO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgZGlzcGxheUNvbnRyb2xsZXIgZnJvbSBcIi4vbW9kdWxlcy9kaXNwbGF5LWNvbnRyb2xsZXJcIjtcbmltcG9ydCBwcm9qZWN0cyBmcm9tIFwiLi9tb2R1bGVzL3Byb2plY3RzXCI7XG5cbmluaXQoKTtcblxuZnVuY3Rpb24gYWRkQnV0dG9uTGlzdGVuZXJzKCkge1xuICBjb25zdCBhZGRQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGQtcHJvamVjdFwiKTtcbiAgYWRkUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGlmICghZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LWZvcm1cIikpIHtcbiAgICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbiAgICAgIGxldCBmb3JtID0gZGlzcGxheUNvbnRyb2xsZXIuY3JlYXRlUHJvamVjdEZvcm0oKTtcbiAgICAgIGZvcm0uZm9jdXMoKTtcbiAgICAgIGJvZHkuYXBwZW5kKGZvcm0pO1xuICAgIH1cbiAgfSk7XG4gIGNvbnN0IGFkZFRhc2tzQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGQtdGFza1wiKTtcbiAgYWRkVGFza3NCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBkaXNwbGF5Q29udHJvbGxlci5jcmVhdGVUYXNrRm9ybSgpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gaW5pdCgpIHtcbiAgYWRkQnV0dG9uTGlzdGVuZXJzKCk7XG4gIHByb2plY3RzLmNyZWF0ZVByb2plY3QoXCJUby1kb1wiKTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==