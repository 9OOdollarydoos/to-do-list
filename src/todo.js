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

export { ToDo, projects, Project };