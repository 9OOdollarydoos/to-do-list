import { toDo, projects, Project } from './todo.js'
import { displayController } from './views.js'

console.log(projects.getProjects())
displayController.renderProjects( projects.getProjects() );