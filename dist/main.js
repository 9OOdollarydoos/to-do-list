/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToDo": () => (/* binding */ ToDo),
/* harmony export */   "projects": () => (/* binding */ projects),
/* harmony export */   "Project": () => (/* binding */ Project)
/* harmony export */ });
class ToDo {
  
  constructor (title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }
}

//moved project into the to-do module as they are realtively dependent
class Project {
  
  constructor (title, description, toDos = []) {
    this.title = title;
    this.description = description;
    this.toDos = toDos //array of to-do objects
  }

  addToDo = (e) => {
    //fires from an event that submits a form, so have to get params from event
    console.log(e);
    //this.toDos.push( new ToDo (title, description, dueDate, priority) )
  }
};

const projects = (() => {
  const myProjects = []; //array of projects

  const getProjects = () => myProjects;
  
  const update = () => {
    localStorage.setItem('odinToDo', JSON.stringify(myProjects));
  }

  const load = () => {
    //load projects from local storage otherwise creates the default project
    let myTempProjects = JSON.parse(localStorage.getItem('myProjects'));
    if ( myTempProjects ) {
      myTempProjects.forEach(function(project){
        newProject = new Project(project.title, project.description, project.toDos);
        myProjects.push(newProject);
      });
    } else { 
      let defaultProject = new Project("Default", "A basic to do list")
      myProjects.push(defaultProject);
    }
  }

  load();

  return { getProjects, update, load }

})()



/***/ }),

/***/ "./src/views.js":
/*!**********************!*\
  !*** ./src/views.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayController": () => (/* binding */ displayController)
/* harmony export */ });

const displayController = (() => {
  let body = document.querySelector("#content");

  const renderHeader = () => {

  }

  const renderTaskForm = (project) => { //turns on a form to create a toDo item for a certain project
    let form = document.createElement("form");
    form.innerHTML = `
        <label for="title">Title:</label>
        <input type="text" id="title" name="title"><br>
        <label for="description">Description:</label>
        <input type="text" id="description" name="description"><br>
        <label for="dueDate">Due Date:</label>
        <input type="date" id="dueDate" name="dueDate"><br>
        <label for="priority">Priority: </label>
        <input type="text" id="priority" name="priority"<br>`
    //form.id = "form";
    //form.method = "post";
    form.action = "";
    let btn = document.createElement("button")
    //btn.type = "submit";
    btn.onclick = (e) => { project.addToDo(e) };
    btn.innerHTML = "Add task!"
    form.appendChild(btn);
    return form;
  }

  const renderProjects = (projects) => { //displays a projects object which is passed as param
    let area = body;
    area.innerHTML = "<h1>My Projects:</h1>";
    projects.forEach( (item) => { //loop through each project and add html
      let projectDiv = document.createElement("div");
      let htmlStr = "";
      htmlStr += `
        <h2>${item.title}</h2>
        <p>${item.description}</p>`;
      item.toDos.forEach( (task) => { //loop through each task and add html
        htmlStr += `
          <h3>${task.title}</h3>
          <ul>
            <li>${task.description}</li>
            <li>${task.dueDate}</li>
            <li>${task.priority}</li>
          </ul>` // add buttons to delete etc.
      })
      projectDiv.innerHTML = htmlStr;
      projectDiv.appendChild( renderTaskForm(item) )
      area.appendChild(projectDiv);
    })
  }

  return { renderProjects }
})()



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
/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo.js */ "./src/todo.js");
/* harmony import */ var _views_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views.js */ "./src/views.js");



console.log(_todo_js__WEBPACK_IMPORTED_MODULE_0__.projects.getProjects())
_views_js__WEBPACK_IMPORTED_MODULE_1__.displayController.renderProjects( _todo_js__WEBPACK_IMPORTED_MODULE_0__.projects.getProjects() );
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EseUJBQXlCOztBQUV6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxXQUFXOztBQUVYLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEREO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsd0NBQXdDO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQSxjQUFjLFdBQVc7QUFDekIsYUFBYSxpQkFBaUI7QUFDOUIsc0NBQXNDO0FBQ3RDO0FBQ0EsZ0JBQWdCLFdBQVc7QUFDM0I7QUFDQSxrQkFBa0IsaUJBQWlCO0FBQ25DLGtCQUFrQixhQUFhO0FBQy9CLGtCQUFrQixjQUFjO0FBQ2hDO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQSxXQUFXO0FBQ1gsQ0FBQzs7Ozs7Ozs7VUN2REQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNObUQ7QUFDTDs7QUFFOUMsWUFBWSwwREFBb0I7QUFDaEMsdUVBQWdDLEVBQUUsMERBQW9CLEsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3RvZG8uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy92aWV3cy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBUb0RvIHtcbiAgXG4gIGNvbnN0cnVjdG9yICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgfVxufVxuXG4vL21vdmVkIHByb2plY3QgaW50byB0aGUgdG8tZG8gbW9kdWxlIGFzIHRoZXkgYXJlIHJlYWx0aXZlbHkgZGVwZW5kZW50XG5jbGFzcyBQcm9qZWN0IHtcbiAgXG4gIGNvbnN0cnVjdG9yICh0aXRsZSwgZGVzY3JpcHRpb24sIHRvRG9zID0gW10pIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMudG9Eb3MgPSB0b0RvcyAvL2FycmF5IG9mIHRvLWRvIG9iamVjdHNcbiAgfVxuXG4gIGFkZFRvRG8gPSAoZSkgPT4ge1xuICAgIC8vZmlyZXMgZnJvbSBhbiBldmVudCB0aGF0IHN1Ym1pdHMgYSBmb3JtLCBzbyBoYXZlIHRvIGdldCBwYXJhbXMgZnJvbSBldmVudFxuICAgIGNvbnNvbGUubG9nKGUpO1xuICAgIC8vdGhpcy50b0Rvcy5wdXNoKCBuZXcgVG9EbyAodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkgKVxuICB9XG59O1xuXG5jb25zdCBwcm9qZWN0cyA9ICgoKSA9PiB7XG4gIGNvbnN0IG15UHJvamVjdHMgPSBbXTsgLy9hcnJheSBvZiBwcm9qZWN0c1xuXG4gIGNvbnN0IGdldFByb2plY3RzID0gKCkgPT4gbXlQcm9qZWN0cztcbiAgXG4gIGNvbnN0IHVwZGF0ZSA9ICgpID0+IHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnb2RpblRvRG8nLCBKU09OLnN0cmluZ2lmeShteVByb2plY3RzKSk7XG4gIH1cblxuICBjb25zdCBsb2FkID0gKCkgPT4ge1xuICAgIC8vbG9hZCBwcm9qZWN0cyBmcm9tIGxvY2FsIHN0b3JhZ2Ugb3RoZXJ3aXNlIGNyZWF0ZXMgdGhlIGRlZmF1bHQgcHJvamVjdFxuICAgIGxldCBteVRlbXBQcm9qZWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ215UHJvamVjdHMnKSk7XG4gICAgaWYgKCBteVRlbXBQcm9qZWN0cyApIHtcbiAgICAgIG15VGVtcFByb2plY3RzLmZvckVhY2goZnVuY3Rpb24ocHJvamVjdCl7XG4gICAgICAgIG5ld1Byb2plY3QgPSBuZXcgUHJvamVjdChwcm9qZWN0LnRpdGxlLCBwcm9qZWN0LmRlc2NyaXB0aW9uLCBwcm9qZWN0LnRvRG9zKTtcbiAgICAgICAgbXlQcm9qZWN0cy5wdXNoKG5ld1Byb2plY3QpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHsgXG4gICAgICBsZXQgZGVmYXVsdFByb2plY3QgPSBuZXcgUHJvamVjdChcIkRlZmF1bHRcIiwgXCJBIGJhc2ljIHRvIGRvIGxpc3RcIilcbiAgICAgIG15UHJvamVjdHMucHVzaChkZWZhdWx0UHJvamVjdCk7XG4gICAgfVxuICB9XG5cbiAgbG9hZCgpO1xuXG4gIHJldHVybiB7IGdldFByb2plY3RzLCB1cGRhdGUsIGxvYWQgfVxuXG59KSgpXG5cbmV4cG9ydCB7IFRvRG8sIHByb2plY3RzLCBQcm9qZWN0IH07IiwiXG5jb25zdCBkaXNwbGF5Q29udHJvbGxlciA9ICgoKSA9PiB7XG4gIGxldCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuXG4gIGNvbnN0IHJlbmRlckhlYWRlciA9ICgpID0+IHtcblxuICB9XG5cbiAgY29uc3QgcmVuZGVyVGFza0Zvcm0gPSAocHJvamVjdCkgPT4geyAvL3R1cm5zIG9uIGEgZm9ybSB0byBjcmVhdGUgYSB0b0RvIGl0ZW0gZm9yIGEgY2VydGFpbiBwcm9qZWN0XG4gICAgbGV0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgICBmb3JtLmlubmVySFRNTCA9IGBcbiAgICAgICAgPGxhYmVsIGZvcj1cInRpdGxlXCI+VGl0bGU6PC9sYWJlbD5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJ0aXRsZVwiIG5hbWU9XCJ0aXRsZVwiPjxicj5cbiAgICAgICAgPGxhYmVsIGZvcj1cImRlc2NyaXB0aW9uXCI+RGVzY3JpcHRpb246PC9sYWJlbD5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJkZXNjcmlwdGlvblwiIG5hbWU9XCJkZXNjcmlwdGlvblwiPjxicj5cbiAgICAgICAgPGxhYmVsIGZvcj1cImR1ZURhdGVcIj5EdWUgRGF0ZTo8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgdHlwZT1cImRhdGVcIiBpZD1cImR1ZURhdGVcIiBuYW1lPVwiZHVlRGF0ZVwiPjxicj5cbiAgICAgICAgPGxhYmVsIGZvcj1cInByaW9yaXR5XCI+UHJpb3JpdHk6IDwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwicHJpb3JpdHlcIiBuYW1lPVwicHJpb3JpdHlcIjxicj5gXG4gICAgLy9mb3JtLmlkID0gXCJmb3JtXCI7XG4gICAgLy9mb3JtLm1ldGhvZCA9IFwicG9zdFwiO1xuICAgIGZvcm0uYWN0aW9uID0gXCJcIjtcbiAgICBsZXQgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxuICAgIC8vYnRuLnR5cGUgPSBcInN1Ym1pdFwiO1xuICAgIGJ0bi5vbmNsaWNrID0gKGUpID0+IHsgcHJvamVjdC5hZGRUb0RvKGUpIH07XG4gICAgYnRuLmlubmVySFRNTCA9IFwiQWRkIHRhc2shXCJcbiAgICBmb3JtLmFwcGVuZENoaWxkKGJ0bik7XG4gICAgcmV0dXJuIGZvcm07XG4gIH1cblxuICBjb25zdCByZW5kZXJQcm9qZWN0cyA9IChwcm9qZWN0cykgPT4geyAvL2Rpc3BsYXlzIGEgcHJvamVjdHMgb2JqZWN0IHdoaWNoIGlzIHBhc3NlZCBhcyBwYXJhbVxuICAgIGxldCBhcmVhID0gYm9keTtcbiAgICBhcmVhLmlubmVySFRNTCA9IFwiPGgxPk15IFByb2plY3RzOjwvaDE+XCI7XG4gICAgcHJvamVjdHMuZm9yRWFjaCggKGl0ZW0pID0+IHsgLy9sb29wIHRocm91Z2ggZWFjaCBwcm9qZWN0IGFuZCBhZGQgaHRtbFxuICAgICAgbGV0IHByb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgbGV0IGh0bWxTdHIgPSBcIlwiO1xuICAgICAgaHRtbFN0ciArPSBgXG4gICAgICAgIDxoMj4ke2l0ZW0udGl0bGV9PC9oMj5cbiAgICAgICAgPHA+JHtpdGVtLmRlc2NyaXB0aW9ufTwvcD5gO1xuICAgICAgaXRlbS50b0Rvcy5mb3JFYWNoKCAodGFzaykgPT4geyAvL2xvb3AgdGhyb3VnaCBlYWNoIHRhc2sgYW5kIGFkZCBodG1sXG4gICAgICAgIGh0bWxTdHIgKz0gYFxuICAgICAgICAgIDxoMz4ke3Rhc2sudGl0bGV9PC9oMz5cbiAgICAgICAgICA8dWw+XG4gICAgICAgICAgICA8bGk+JHt0YXNrLmRlc2NyaXB0aW9ufTwvbGk+XG4gICAgICAgICAgICA8bGk+JHt0YXNrLmR1ZURhdGV9PC9saT5cbiAgICAgICAgICAgIDxsaT4ke3Rhc2sucHJpb3JpdHl9PC9saT5cbiAgICAgICAgICA8L3VsPmAgLy8gYWRkIGJ1dHRvbnMgdG8gZGVsZXRlIGV0Yy5cbiAgICAgIH0pXG4gICAgICBwcm9qZWN0RGl2LmlubmVySFRNTCA9IGh0bWxTdHI7XG4gICAgICBwcm9qZWN0RGl2LmFwcGVuZENoaWxkKCByZW5kZXJUYXNrRm9ybShpdGVtKSApXG4gICAgICBhcmVhLmFwcGVuZENoaWxkKHByb2plY3REaXYpO1xuICAgIH0pXG4gIH1cblxuICByZXR1cm4geyByZW5kZXJQcm9qZWN0cyB9XG59KSgpXG5cbmV4cG9ydCB7IGRpc3BsYXlDb250cm9sbGVyIH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyB0b0RvLCBwcm9qZWN0cywgUHJvamVjdCB9IGZyb20gJy4vdG9kby5qcydcbmltcG9ydCB7IGRpc3BsYXlDb250cm9sbGVyIH0gZnJvbSAnLi92aWV3cy5qcydcblxuY29uc29sZS5sb2cocHJvamVjdHMuZ2V0UHJvamVjdHMoKSlcbmRpc3BsYXlDb250cm9sbGVyLnJlbmRlclByb2plY3RzKCBwcm9qZWN0cy5nZXRQcm9qZWN0cygpICk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9