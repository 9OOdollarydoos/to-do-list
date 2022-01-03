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

  //displays a projects object which is passed as param
  const renderProjects = (projects) => {
    let area = body;
    let htmlStr = ""
    projects.forEach( (item) => { 
      htmlStr += `
        <ul>
        <li>${item.title}</li>
        <li>${item.description}</li>
        </ul>`;
      //item.todos
    })
    area.innerHTML = htmlStr;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHlCQUF5Qjs7QUFFekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsV0FBVzs7QUFFWCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQzlDRDtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxXQUFXO0FBQ3pCLGNBQWMsaUJBQWlCO0FBQy9CO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQSxXQUFXO0FBQ1gsQ0FBQzs7Ozs7Ozs7VUN4QkQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNObUQ7QUFDTDs7QUFFOUMsWUFBWSwwREFBb0I7QUFDaEMsdUVBQWdDLEVBQUUsMERBQW9CLEsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3RvZG8uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy92aWV3cy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBUb0RvIHtcbiAgXG4gIGNvbnN0cnVjdG9yICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgfVxufVxuXG4vL21vdmVkIHByb2plY3QgaW50byB0aGUgdG8tZG8gbW9kdWxlIGFzIHRoZXkgYXJlIHJlYWx0aXZlbHkgZGVwZW5kZW50XG5jbGFzcyBQcm9qZWN0IHtcbiAgXG4gIGNvbnN0cnVjdG9yICh0aXRsZSwgZGVzY3JpcHRpb24sIHRvRG9zID0gW10pIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMudG9Eb3MgPSB0b0RvcyAvL2FycmF5IG9mIHRvLWRvIG9iamVjdHNcbiAgfVxufTtcblxuY29uc3QgcHJvamVjdHMgPSAoKCkgPT4ge1xuICBjb25zdCBteVByb2plY3RzID0gW107IC8vYXJyYXkgb2YgcHJvamVjdHNcblxuICBjb25zdCBnZXRQcm9qZWN0cyA9ICgpID0+IG15UHJvamVjdHM7XG4gIFxuICBjb25zdCB1cGRhdGUgPSAoKSA9PiB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ29kaW5Ub0RvJywgSlNPTi5zdHJpbmdpZnkobXlQcm9qZWN0cykpO1xuICB9XG5cbiAgY29uc3QgbG9hZCA9ICgpID0+IHtcbiAgICAvL2xvYWQgcHJvamVjdHMgZnJvbSBsb2NhbCBzdG9yYWdlIG90aGVyd2lzZSBjcmVhdGVzIHRoZSBkZWZhdWx0IHByb2plY3RcbiAgICBsZXQgbXlUZW1wUHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdteVByb2plY3RzJykpO1xuICAgIGlmICggbXlUZW1wUHJvamVjdHMgKSB7XG4gICAgICBteVRlbXBQcm9qZWN0cy5mb3JFYWNoKGZ1bmN0aW9uKHByb2plY3Qpe1xuICAgICAgICBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3QocHJvamVjdC50aXRsZSwgcHJvamVjdC5kZXNjcmlwdGlvbiwgcHJvamVjdC50b0Rvcyk7XG4gICAgICAgIG15UHJvamVjdHMucHVzaChuZXdQcm9qZWN0KTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7IFxuICAgICAgbGV0IGRlZmF1bHRQcm9qZWN0ID0gbmV3IFByb2plY3QoXCJEZWZhdWx0XCIsIFwiQSBiYXNpYyB0byBkbyBsaXN0XCIpXG4gICAgICBteVByb2plY3RzLnB1c2goZGVmYXVsdFByb2plY3QpO1xuICAgIH1cbiAgfVxuXG4gIGxvYWQoKTtcblxuICByZXR1cm4geyBnZXRQcm9qZWN0cywgdXBkYXRlLCBsb2FkIH1cblxufSkoKVxuXG5leHBvcnQgeyBUb0RvLCBwcm9qZWN0cywgUHJvamVjdCB9OyIsIlxuY29uc3QgZGlzcGxheUNvbnRyb2xsZXIgPSAoKCkgPT4ge1xuICBsZXQgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcblxuICBjb25zdCByZW5kZXJIZWFkZXIgPSAoKSA9PiB7XG5cbiAgfVxuXG4gIC8vZGlzcGxheXMgYSBwcm9qZWN0cyBvYmplY3Qgd2hpY2ggaXMgcGFzc2VkIGFzIHBhcmFtXG4gIGNvbnN0IHJlbmRlclByb2plY3RzID0gKHByb2plY3RzKSA9PiB7XG4gICAgbGV0IGFyZWEgPSBib2R5O1xuICAgIGxldCBodG1sU3RyID0gXCJcIlxuICAgIHByb2plY3RzLmZvckVhY2goIChpdGVtKSA9PiB7IFxuICAgICAgaHRtbFN0ciArPSBgXG4gICAgICAgIDx1bD5cbiAgICAgICAgPGxpPiR7aXRlbS50aXRsZX08L2xpPlxuICAgICAgICA8bGk+JHtpdGVtLmRlc2NyaXB0aW9ufTwvbGk+XG4gICAgICAgIDwvdWw+YDtcbiAgICAgIC8vaXRlbS50b2Rvc1xuICAgIH0pXG4gICAgYXJlYS5pbm5lckhUTUwgPSBodG1sU3RyO1xuICB9XG5cbiAgcmV0dXJuIHsgcmVuZGVyUHJvamVjdHMgfVxufSkoKVxuXG5leHBvcnQgeyBkaXNwbGF5Q29udHJvbGxlciB9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgdG9EbywgcHJvamVjdHMsIFByb2plY3QgfSBmcm9tICcuL3RvZG8uanMnXG5pbXBvcnQgeyBkaXNwbGF5Q29udHJvbGxlciB9IGZyb20gJy4vdmlld3MuanMnXG5cbmNvbnNvbGUubG9nKHByb2plY3RzLmdldFByb2plY3RzKCkpXG5kaXNwbGF5Q29udHJvbGxlci5yZW5kZXJQcm9qZWN0cyggcHJvamVjdHMuZ2V0UHJvamVjdHMoKSApOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==