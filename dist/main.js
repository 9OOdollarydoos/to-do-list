/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToDo": () => (/* binding */ ToDo),
/* harmony export */   "projects": () => (/* binding */ projects),
/* harmony export */   "Project": () => (/* binding */ Project)
/* harmony export */ });
/* harmony import */ var _views__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./views */ "./src/views.js");
/* harmony import */ var _views__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_views__WEBPACK_IMPORTED_MODULE_0__);


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
  }
};

const projects = (() => {
  const myProjects = []; //array of projects

  const getProjects = () => myProjects;
  
  const update = () => {
    localStorage.setItem('odinToDo', JSON.stringify(myProjects));
  }

  const addProject = (e) => {
    //fires from an event that submits a form, so have to get params from event
    myProjects.push( new Project ( 
      e.target.title.value, 
      e.target.description.value ) 
    )
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

  return { getProjects, update, load, addProject }

})()



/***/ }),

/***/ "./src/views.js":
/*!**********************!*\
  !*** ./src/views.js ***!
  \**********************/
/***/ (() => {


//moved to index.js

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo.js */ "./src/todo.js");


const displayController = (() => {
  let body = document.querySelector("#content");

  const renderHeader = () => {

  }

  const renderProjectForm = () => { //turns on a form to create a project, needs access to the projects object though which I cant manage...
    let form = document.createElement("form");
    form.innerHTML = `
        <label for="title">Title:</label>
        <input type="text" id="title" name="title"><br>
        <label for="description">Description:</label>
        <input type="text" id="description" name="description"><br>`
    //form.id = "form";
    form.method = "post";
    form.action = "";
    let btn = document.createElement("button")
    btn.type = "submit";
    form.addEventListener("submit", (e) => { 
      e.preventDefault();
      _todo_js__WEBPACK_IMPORTED_MODULE_0__.projects.addProject(e);
      renderProjects( _todo_js__WEBPACK_IMPORTED_MODULE_0__.projects.getProjects() ); 
    });
    btn.innerHTML = "Add Project!"
    form.appendChild(btn);
    return form;
  }

  const renderTaskForm = (project) => { //turns on a form to create a toDo item for a certain project
    let form = document.createElement("form");
    form.innerHTML = `
        <h3>Create new task:</h3>
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
      renderProjects( _todo_js__WEBPACK_IMPORTED_MODULE_0__.projects.getProjects() ); 
    });
    btn.innerHTML = "Add task!"
    form.appendChild(btn);
    return form;
  }

  const renderProjects = (projects) => { //displays projects and to-dos from an array of projects
    let area = body;
    area.innerHTML = "<h1>My Projects:</h1>";

    //add the section that lists all projects and tasks
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

    //then add section with new project form
    let projectFormHtml = document.createElement("div");
    projectFormHtml.innerHTML = `<div id="new-project">
      <h3>Add new project</h3>
      </div>`
    projectFormHtml.appendChild( renderProjectForm() )
    area.appendChild(projectFormHtml)
  }

  renderProjects( _todo_js__WEBPACK_IMPORTED_MODULE_0__.projects.getProjects() )

  return { renderProjects }
})()
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNEM7O0FBRTVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EseUJBQXlCOztBQUV6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxXQUFXOztBQUVYLENBQUM7Ozs7Ozs7Ozs7Ozs7QUNsRUQ7Ozs7OztVQ0RBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTm1EOztBQUVuRDtBQUNBOztBQUVBOztBQUVBOztBQUVBLG9DQUFvQztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0seURBQW1CO0FBQ3pCLHNCQUFzQiwwREFBb0I7QUFDMUMsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdDQUF3QztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQiwwREFBb0I7QUFDMUMsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHlDQUF5QztBQUN6QztBQUNBOztBQUVBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBLGNBQWMsV0FBVztBQUN6QixhQUFhLGlCQUFpQjtBQUM5QixzQ0FBc0M7QUFDdEM7QUFDQSxnQkFBZ0IsV0FBVztBQUMzQjtBQUNBLGtCQUFrQixpQkFBaUI7QUFDbkMsa0JBQWtCLGFBQWE7QUFDL0Isa0JBQWtCLGNBQWM7QUFDaEM7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGtCQUFrQiwwREFBb0I7O0FBRXRDLFdBQVc7QUFDWCxDQUFDLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3RvZG8uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy92aWV3cy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGRpc3BsYXlDb250cm9sbGVyIH0gZnJvbSBcIi4vdmlld3NcIjtcblxuY2xhc3MgVG9EbyB7XG4gIFxuICBjb25zdHJ1Y3RvciAodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gIH1cbn1cblxuLy9tb3ZlZCBwcm9qZWN0IGludG8gdGhlIHRvLWRvIG1vZHVsZSBhcyB0aGV5IGFyZSByZWFsdGl2ZWx5IGRlcGVuZGVudFxuY2xhc3MgUHJvamVjdCB7XG4gIFxuICBjb25zdHJ1Y3RvciAodGl0bGUsIGRlc2NyaXB0aW9uLCB0b0RvcyA9IFtdKSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLnRvRG9zID0gdG9Eb3MgLy9hcnJheSBvZiB0by1kbyBvYmplY3RzXG4gIH1cblxuICBhZGRUb0RvID0gKGUpID0+IHtcbiAgICAvL2ZpcmVzIGZyb20gYW4gZXZlbnQgdGhhdCBzdWJtaXRzIGEgZm9ybSwgc28gaGF2ZSB0byBnZXQgcGFyYW1zIGZyb20gZXZlbnRcbiAgICB0aGlzLnRvRG9zLnB1c2goIG5ldyBUb0RvIChcbiAgICAgIGUudGFyZ2V0LnRpdGxlLnZhbHVlLCBcbiAgICAgIGUudGFyZ2V0LmRlc2NyaXB0aW9uLnZhbHVlLCBcbiAgICAgIGUudGFyZ2V0LmR1ZURhdGUudmFsdWUsIFxuICAgICAgZS50YXJnZXQucHJpb3JpdHkudmFsdWUpIFxuICAgIClcbiAgfVxufTtcblxuY29uc3QgcHJvamVjdHMgPSAoKCkgPT4ge1xuICBjb25zdCBteVByb2plY3RzID0gW107IC8vYXJyYXkgb2YgcHJvamVjdHNcblxuICBjb25zdCBnZXRQcm9qZWN0cyA9ICgpID0+IG15UHJvamVjdHM7XG4gIFxuICBjb25zdCB1cGRhdGUgPSAoKSA9PiB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ29kaW5Ub0RvJywgSlNPTi5zdHJpbmdpZnkobXlQcm9qZWN0cykpO1xuICB9XG5cbiAgY29uc3QgYWRkUHJvamVjdCA9IChlKSA9PiB7XG4gICAgLy9maXJlcyBmcm9tIGFuIGV2ZW50IHRoYXQgc3VibWl0cyBhIGZvcm0sIHNvIGhhdmUgdG8gZ2V0IHBhcmFtcyBmcm9tIGV2ZW50XG4gICAgbXlQcm9qZWN0cy5wdXNoKCBuZXcgUHJvamVjdCAoIFxuICAgICAgZS50YXJnZXQudGl0bGUudmFsdWUsIFxuICAgICAgZS50YXJnZXQuZGVzY3JpcHRpb24udmFsdWUgKSBcbiAgICApXG4gIH1cblxuICBjb25zdCBsb2FkID0gKCkgPT4ge1xuICAgIC8vbG9hZCBwcm9qZWN0cyBmcm9tIGxvY2FsIHN0b3JhZ2Ugb3RoZXJ3aXNlIGNyZWF0ZXMgdGhlIGRlZmF1bHQgcHJvamVjdFxuICAgIGxldCBteVRlbXBQcm9qZWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ215UHJvamVjdHMnKSk7XG4gICAgaWYgKCBteVRlbXBQcm9qZWN0cyApIHtcbiAgICAgIG15VGVtcFByb2plY3RzLmZvckVhY2goZnVuY3Rpb24ocHJvamVjdCl7XG4gICAgICAgIG5ld1Byb2plY3QgPSBuZXcgUHJvamVjdChwcm9qZWN0LnRpdGxlLCBwcm9qZWN0LmRlc2NyaXB0aW9uLCBwcm9qZWN0LnRvRG9zKTtcbiAgICAgICAgbXlQcm9qZWN0cy5wdXNoKG5ld1Byb2plY3QpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHsgXG4gICAgICBsZXQgZGVmYXVsdFByb2plY3QgPSBuZXcgUHJvamVjdChcIkRlZmF1bHRcIiwgXCJBIGJhc2ljIHRvIGRvIGxpc3RcIilcbiAgICAgIG15UHJvamVjdHMucHVzaChkZWZhdWx0UHJvamVjdCk7XG4gICAgfVxuICB9XG5cbiAgbG9hZCgpO1xuXG4gIHJldHVybiB7IGdldFByb2plY3RzLCB1cGRhdGUsIGxvYWQsIGFkZFByb2plY3QgfVxuXG59KSgpXG5cbmV4cG9ydCB7IFRvRG8sIHByb2plY3RzLCBQcm9qZWN0IH07IiwiXG4vL21vdmVkIHRvIGluZGV4LmpzIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IHRvRG8sIHByb2plY3RzLCBQcm9qZWN0IH0gZnJvbSAnLi90b2RvLmpzJ1xuXG5jb25zdCBkaXNwbGF5Q29udHJvbGxlciA9ICgoKSA9PiB7XG4gIGxldCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuXG4gIGNvbnN0IHJlbmRlckhlYWRlciA9ICgpID0+IHtcblxuICB9XG5cbiAgY29uc3QgcmVuZGVyUHJvamVjdEZvcm0gPSAoKSA9PiB7IC8vdHVybnMgb24gYSBmb3JtIHRvIGNyZWF0ZSBhIHByb2plY3QsIG5lZWRzIGFjY2VzcyB0byB0aGUgcHJvamVjdHMgb2JqZWN0IHRob3VnaCB3aGljaCBJIGNhbnQgbWFuYWdlLi4uXG4gICAgbGV0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgICBmb3JtLmlubmVySFRNTCA9IGBcbiAgICAgICAgPGxhYmVsIGZvcj1cInRpdGxlXCI+VGl0bGU6PC9sYWJlbD5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJ0aXRsZVwiIG5hbWU9XCJ0aXRsZVwiPjxicj5cbiAgICAgICAgPGxhYmVsIGZvcj1cImRlc2NyaXB0aW9uXCI+RGVzY3JpcHRpb246PC9sYWJlbD5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJkZXNjcmlwdGlvblwiIG5hbWU9XCJkZXNjcmlwdGlvblwiPjxicj5gXG4gICAgLy9mb3JtLmlkID0gXCJmb3JtXCI7XG4gICAgZm9ybS5tZXRob2QgPSBcInBvc3RcIjtcbiAgICBmb3JtLmFjdGlvbiA9IFwiXCI7XG4gICAgbGV0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcbiAgICBidG4udHlwZSA9IFwic3VibWl0XCI7XG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7IFxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgcHJvamVjdHMuYWRkUHJvamVjdChlKTtcbiAgICAgIHJlbmRlclByb2plY3RzKCBwcm9qZWN0cy5nZXRQcm9qZWN0cygpICk7IFxuICAgIH0pO1xuICAgIGJ0bi5pbm5lckhUTUwgPSBcIkFkZCBQcm9qZWN0IVwiXG4gICAgZm9ybS5hcHBlbmRDaGlsZChidG4pO1xuICAgIHJldHVybiBmb3JtO1xuICB9XG5cbiAgY29uc3QgcmVuZGVyVGFza0Zvcm0gPSAocHJvamVjdCkgPT4geyAvL3R1cm5zIG9uIGEgZm9ybSB0byBjcmVhdGUgYSB0b0RvIGl0ZW0gZm9yIGEgY2VydGFpbiBwcm9qZWN0XG4gICAgbGV0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgICBmb3JtLmlubmVySFRNTCA9IGBcbiAgICAgICAgPGgzPkNyZWF0ZSBuZXcgdGFzazo8L2gzPlxuICAgICAgICA8bGFiZWwgZm9yPVwidGl0bGVcIj5UaXRsZTo8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInRpdGxlXCIgbmFtZT1cInRpdGxlXCI+PGJyPlxuICAgICAgICA8bGFiZWwgZm9yPVwiZGVzY3JpcHRpb25cIj5EZXNjcmlwdGlvbjo8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cImRlc2NyaXB0aW9uXCIgbmFtZT1cImRlc2NyaXB0aW9uXCI+PGJyPlxuICAgICAgICA8bGFiZWwgZm9yPVwiZHVlRGF0ZVwiPkR1ZSBEYXRlOjwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwiZGF0ZVwiIGlkPVwiZHVlRGF0ZVwiIG5hbWU9XCJkdWVEYXRlXCI+PGJyPlxuICAgICAgICA8bGFiZWwgZm9yPVwicHJpb3JpdHlcIj5Qcmlvcml0eTogPC9sYWJlbD5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJwcmlvcml0eVwiIG5hbWU9XCJwcmlvcml0eVwiPGJyPmBcbiAgICAvL2Zvcm0uaWQgPSBcImZvcm1cIjtcbiAgICBmb3JtLm1ldGhvZCA9IFwicG9zdFwiO1xuICAgIGZvcm0uYWN0aW9uID0gXCJcIjtcbiAgICBsZXQgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxuICAgIGJ0bi50eXBlID0gXCJzdWJtaXRcIjtcbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHsgXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBwcm9qZWN0LmFkZFRvRG8oZSk7XG4gICAgICByZW5kZXJQcm9qZWN0cyggcHJvamVjdHMuZ2V0UHJvamVjdHMoKSApOyBcbiAgICB9KTtcbiAgICBidG4uaW5uZXJIVE1MID0gXCJBZGQgdGFzayFcIlxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoYnRuKTtcbiAgICByZXR1cm4gZm9ybTtcbiAgfVxuXG4gIGNvbnN0IHJlbmRlclByb2plY3RzID0gKHByb2plY3RzKSA9PiB7IC8vZGlzcGxheXMgcHJvamVjdHMgYW5kIHRvLWRvcyBmcm9tIGFuIGFycmF5IG9mIHByb2plY3RzXG4gICAgbGV0IGFyZWEgPSBib2R5O1xuICAgIGFyZWEuaW5uZXJIVE1MID0gXCI8aDE+TXkgUHJvamVjdHM6PC9oMT5cIjtcblxuICAgIC8vYWRkIHRoZSBzZWN0aW9uIHRoYXQgbGlzdHMgYWxsIHByb2plY3RzIGFuZCB0YXNrc1xuICAgIHByb2plY3RzLmZvckVhY2goIChpdGVtKSA9PiB7IC8vbG9vcCB0aHJvdWdoIGVhY2ggcHJvamVjdCBhbmQgYWRkIGh0bWxcbiAgICAgIGxldCBwcm9qZWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGxldCBodG1sU3RyID0gXCJcIjtcbiAgICAgIGh0bWxTdHIgKz0gYFxuICAgICAgICA8aDI+JHtpdGVtLnRpdGxlfTwvaDI+XG4gICAgICAgIDxwPiR7aXRlbS5kZXNjcmlwdGlvbn08L3A+YDtcbiAgICAgIGl0ZW0udG9Eb3MuZm9yRWFjaCggKHRhc2spID0+IHsgLy9sb29wIHRocm91Z2ggZWFjaCB0YXNrIGFuZCBhZGQgaHRtbFxuICAgICAgICBodG1sU3RyICs9IGBcbiAgICAgICAgICA8aDM+JHt0YXNrLnRpdGxlfTwvaDM+XG4gICAgICAgICAgPHVsPlxuICAgICAgICAgICAgPGxpPiR7dGFzay5kZXNjcmlwdGlvbn08L2xpPlxuICAgICAgICAgICAgPGxpPiR7dGFzay5kdWVEYXRlfTwvbGk+XG4gICAgICAgICAgICA8bGk+JHt0YXNrLnByaW9yaXR5fTwvbGk+XG4gICAgICAgICAgPC91bD5gIC8vIGFkZCBidXR0b25zIHRvIGRlbGV0ZSBldGMuXG4gICAgICB9KVxuICAgICAgcHJvamVjdERpdi5pbm5lckhUTUwgPSBodG1sU3RyO1xuICAgICAgcHJvamVjdERpdi5hcHBlbmRDaGlsZCggcmVuZGVyVGFza0Zvcm0oaXRlbSkgKVxuICAgICAgYXJlYS5hcHBlbmRDaGlsZChwcm9qZWN0RGl2KTtcbiAgICB9KVxuXG4gICAgLy90aGVuIGFkZCBzZWN0aW9uIHdpdGggbmV3IHByb2plY3QgZm9ybVxuICAgIGxldCBwcm9qZWN0Rm9ybUh0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHByb2plY3RGb3JtSHRtbC5pbm5lckhUTUwgPSBgPGRpdiBpZD1cIm5ldy1wcm9qZWN0XCI+XG4gICAgICA8aDM+QWRkIG5ldyBwcm9qZWN0PC9oMz5cbiAgICAgIDwvZGl2PmBcbiAgICBwcm9qZWN0Rm9ybUh0bWwuYXBwZW5kQ2hpbGQoIHJlbmRlclByb2plY3RGb3JtKCkgKVxuICAgIGFyZWEuYXBwZW5kQ2hpbGQocHJvamVjdEZvcm1IdG1sKVxuICB9XG5cbiAgcmVuZGVyUHJvamVjdHMoIHByb2plY3RzLmdldFByb2plY3RzKCkgKVxuXG4gIHJldHVybiB7IHJlbmRlclByb2plY3RzIH1cbn0pKCkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=