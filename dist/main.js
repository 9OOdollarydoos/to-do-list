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
/* harmony import */ var _views__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./views */ "./src/views.js");


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
    this.toDos.push( new ToDo (
      e.target.title.value, 
      e.target.description.value, 
      e.target.dueDate.value, 
      e.target.priority.value) 
    )
    _views__WEBPACK_IMPORTED_MODULE_0__.displayController.renderProjects(projects.getProjects()); //refresh view <----is this very clumsy as it uses two other modules?
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
    form.method = "post";
    form.action = "";
    let btn = document.createElement("button")
    btn.type = "submit";
    form.addEventListener("submit", (e) => { 
      e.preventDefault();
      project.addToDo(e); 
    });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUE0Qzs7QUFFNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksb0VBQWdDLDBCQUEwQjtBQUM5RDtBQUNBOztBQUVBO0FBQ0EseUJBQXlCOztBQUV6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxXQUFXOztBQUVYLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0REO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsd0NBQXdDO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQSxjQUFjLFdBQVc7QUFDekIsYUFBYSxpQkFBaUI7QUFDOUIsc0NBQXNDO0FBQ3RDO0FBQ0EsZ0JBQWdCLFdBQVc7QUFDM0I7QUFDQSxrQkFBa0IsaUJBQWlCO0FBQ25DLGtCQUFrQixhQUFhO0FBQy9CLGtCQUFrQixjQUFjO0FBQ2hDO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQSxXQUFXO0FBQ1gsQ0FBQzs7Ozs7Ozs7VUMxREQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNObUQ7QUFDTDs7QUFFOUMsWUFBWSwwREFBb0I7QUFDaEMsdUVBQWdDLEVBQUUsMERBQW9CLEsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3RvZG8uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy92aWV3cy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkaXNwbGF5Q29udHJvbGxlciB9IGZyb20gXCIuL3ZpZXdzXCI7XG5cbmNsYXNzIFRvRG8ge1xuICBcbiAgY29uc3RydWN0b3IgKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICB9XG59XG5cbi8vbW92ZWQgcHJvamVjdCBpbnRvIHRoZSB0by1kbyBtb2R1bGUgYXMgdGhleSBhcmUgcmVhbHRpdmVseSBkZXBlbmRlbnRcbmNsYXNzIFByb2plY3Qge1xuICBcbiAgY29uc3RydWN0b3IgKHRpdGxlLCBkZXNjcmlwdGlvbiwgdG9Eb3MgPSBbXSkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy50b0RvcyA9IHRvRG9zIC8vYXJyYXkgb2YgdG8tZG8gb2JqZWN0c1xuICB9XG5cbiAgYWRkVG9EbyA9IChlKSA9PiB7XG4gICAgLy9maXJlcyBmcm9tIGFuIGV2ZW50IHRoYXQgc3VibWl0cyBhIGZvcm0sIHNvIGhhdmUgdG8gZ2V0IHBhcmFtcyBmcm9tIGV2ZW50XG4gICAgdGhpcy50b0Rvcy5wdXNoKCBuZXcgVG9EbyAoXG4gICAgICBlLnRhcmdldC50aXRsZS52YWx1ZSwgXG4gICAgICBlLnRhcmdldC5kZXNjcmlwdGlvbi52YWx1ZSwgXG4gICAgICBlLnRhcmdldC5kdWVEYXRlLnZhbHVlLCBcbiAgICAgIGUudGFyZ2V0LnByaW9yaXR5LnZhbHVlKSBcbiAgICApXG4gICAgZGlzcGxheUNvbnRyb2xsZXIucmVuZGVyUHJvamVjdHMocHJvamVjdHMuZ2V0UHJvamVjdHMoKSk7IC8vcmVmcmVzaCB2aWV3IDwtLS0taXMgdGhpcyB2ZXJ5IGNsdW1zeSBhcyBpdCB1c2VzIHR3byBvdGhlciBtb2R1bGVzP1xuICB9XG59O1xuXG5jb25zdCBwcm9qZWN0cyA9ICgoKSA9PiB7XG4gIGNvbnN0IG15UHJvamVjdHMgPSBbXTsgLy9hcnJheSBvZiBwcm9qZWN0c1xuXG4gIGNvbnN0IGdldFByb2plY3RzID0gKCkgPT4gbXlQcm9qZWN0cztcbiAgXG4gIGNvbnN0IHVwZGF0ZSA9ICgpID0+IHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnb2RpblRvRG8nLCBKU09OLnN0cmluZ2lmeShteVByb2plY3RzKSk7XG4gIH1cblxuICBjb25zdCBsb2FkID0gKCkgPT4ge1xuICAgIC8vbG9hZCBwcm9qZWN0cyBmcm9tIGxvY2FsIHN0b3JhZ2Ugb3RoZXJ3aXNlIGNyZWF0ZXMgdGhlIGRlZmF1bHQgcHJvamVjdFxuICAgIGxldCBteVRlbXBQcm9qZWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ215UHJvamVjdHMnKSk7XG4gICAgaWYgKCBteVRlbXBQcm9qZWN0cyApIHtcbiAgICAgIG15VGVtcFByb2plY3RzLmZvckVhY2goZnVuY3Rpb24ocHJvamVjdCl7XG4gICAgICAgIG5ld1Byb2plY3QgPSBuZXcgUHJvamVjdChwcm9qZWN0LnRpdGxlLCBwcm9qZWN0LmRlc2NyaXB0aW9uLCBwcm9qZWN0LnRvRG9zKTtcbiAgICAgICAgbXlQcm9qZWN0cy5wdXNoKG5ld1Byb2plY3QpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHsgXG4gICAgICBsZXQgZGVmYXVsdFByb2plY3QgPSBuZXcgUHJvamVjdChcIkRlZmF1bHRcIiwgXCJBIGJhc2ljIHRvIGRvIGxpc3RcIilcbiAgICAgIG15UHJvamVjdHMucHVzaChkZWZhdWx0UHJvamVjdCk7XG4gICAgfVxuICB9XG5cbiAgbG9hZCgpO1xuXG4gIHJldHVybiB7IGdldFByb2plY3RzLCB1cGRhdGUsIGxvYWQgfVxuXG59KSgpXG5cbmV4cG9ydCB7IFRvRG8sIHByb2plY3RzLCBQcm9qZWN0IH07IiwiXG5jb25zdCBkaXNwbGF5Q29udHJvbGxlciA9ICgoKSA9PiB7XG4gIGxldCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuXG4gIGNvbnN0IHJlbmRlckhlYWRlciA9ICgpID0+IHtcblxuICB9XG5cbiAgY29uc3QgcmVuZGVyVGFza0Zvcm0gPSAocHJvamVjdCkgPT4geyAvL3R1cm5zIG9uIGEgZm9ybSB0byBjcmVhdGUgYSB0b0RvIGl0ZW0gZm9yIGEgY2VydGFpbiBwcm9qZWN0XG4gICAgbGV0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgICBmb3JtLmlubmVySFRNTCA9IGBcbiAgICAgICAgPGxhYmVsIGZvcj1cInRpdGxlXCI+VGl0bGU6PC9sYWJlbD5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJ0aXRsZVwiIG5hbWU9XCJ0aXRsZVwiPjxicj5cbiAgICAgICAgPGxhYmVsIGZvcj1cImRlc2NyaXB0aW9uXCI+RGVzY3JpcHRpb246PC9sYWJlbD5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJkZXNjcmlwdGlvblwiIG5hbWU9XCJkZXNjcmlwdGlvblwiPjxicj5cbiAgICAgICAgPGxhYmVsIGZvcj1cImR1ZURhdGVcIj5EdWUgRGF0ZTo8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgdHlwZT1cImRhdGVcIiBpZD1cImR1ZURhdGVcIiBuYW1lPVwiZHVlRGF0ZVwiPjxicj5cbiAgICAgICAgPGxhYmVsIGZvcj1cInByaW9yaXR5XCI+UHJpb3JpdHk6IDwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwicHJpb3JpdHlcIiBuYW1lPVwicHJpb3JpdHlcIjxicj5gXG4gICAgLy9mb3JtLmlkID0gXCJmb3JtXCI7XG4gICAgZm9ybS5tZXRob2QgPSBcInBvc3RcIjtcbiAgICBmb3JtLmFjdGlvbiA9IFwiXCI7XG4gICAgbGV0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcbiAgICBidG4udHlwZSA9IFwic3VibWl0XCI7XG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7IFxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgcHJvamVjdC5hZGRUb0RvKGUpOyBcbiAgICB9KTtcbiAgICBidG4uaW5uZXJIVE1MID0gXCJBZGQgdGFzayFcIlxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoYnRuKTtcbiAgICByZXR1cm4gZm9ybTtcbiAgfVxuXG4gIGNvbnN0IHJlbmRlclByb2plY3RzID0gKHByb2plY3RzKSA9PiB7IC8vZGlzcGxheXMgYSBwcm9qZWN0cyBvYmplY3Qgd2hpY2ggaXMgcGFzc2VkIGFzIHBhcmFtXG4gICAgbGV0IGFyZWEgPSBib2R5O1xuICAgIGFyZWEuaW5uZXJIVE1MID0gXCI8aDE+TXkgUHJvamVjdHM6PC9oMT5cIjtcbiAgICBwcm9qZWN0cy5mb3JFYWNoKCAoaXRlbSkgPT4geyAvL2xvb3AgdGhyb3VnaCBlYWNoIHByb2plY3QgYW5kIGFkZCBodG1sXG4gICAgICBsZXQgcHJvamVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBsZXQgaHRtbFN0ciA9IFwiXCI7XG4gICAgICBodG1sU3RyICs9IGBcbiAgICAgICAgPGgyPiR7aXRlbS50aXRsZX08L2gyPlxuICAgICAgICA8cD4ke2l0ZW0uZGVzY3JpcHRpb259PC9wPmA7XG4gICAgICBpdGVtLnRvRG9zLmZvckVhY2goICh0YXNrKSA9PiB7IC8vbG9vcCB0aHJvdWdoIGVhY2ggdGFzayBhbmQgYWRkIGh0bWxcbiAgICAgICAgaHRtbFN0ciArPSBgXG4gICAgICAgICAgPGgzPiR7dGFzay50aXRsZX08L2gzPlxuICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgIDxsaT4ke3Rhc2suZGVzY3JpcHRpb259PC9saT5cbiAgICAgICAgICAgIDxsaT4ke3Rhc2suZHVlRGF0ZX08L2xpPlxuICAgICAgICAgICAgPGxpPiR7dGFzay5wcmlvcml0eX08L2xpPlxuICAgICAgICAgIDwvdWw+YCAvLyBhZGQgYnV0dG9ucyB0byBkZWxldGUgZXRjLlxuICAgICAgfSlcbiAgICAgIHByb2plY3REaXYuaW5uZXJIVE1MID0gaHRtbFN0cjtcbiAgICAgIHByb2plY3REaXYuYXBwZW5kQ2hpbGQoIHJlbmRlclRhc2tGb3JtKGl0ZW0pIClcbiAgICAgIGFyZWEuYXBwZW5kQ2hpbGQocHJvamVjdERpdik7XG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiB7IHJlbmRlclByb2plY3RzIH1cbn0pKClcblxuZXhwb3J0IHsgZGlzcGxheUNvbnRyb2xsZXIgfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IHRvRG8sIHByb2plY3RzLCBQcm9qZWN0IH0gZnJvbSAnLi90b2RvLmpzJ1xuaW1wb3J0IHsgZGlzcGxheUNvbnRyb2xsZXIgfSBmcm9tICcuL3ZpZXdzLmpzJ1xuXG5jb25zb2xlLmxvZyhwcm9qZWN0cy5nZXRQcm9qZWN0cygpKVxuZGlzcGxheUNvbnRyb2xsZXIucmVuZGVyUHJvamVjdHMoIHByb2plY3RzLmdldFByb2plY3RzKCkgKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=