import { displayController } from "./views";

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
    displayController.renderProjects(projects.getProjects()); //refresh view <----is this very clumsy as it uses two other modules?
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

export { ToDo, projects, Project };