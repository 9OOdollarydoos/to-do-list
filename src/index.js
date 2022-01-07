import { toDo, projects, Project } from './todo.js'

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
      projects.addProject(e);
      renderProjects( projects.getProjects() ); 
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
      renderProjects( projects.getProjects() ); 
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

  renderProjects( projects.getProjects() )

  return { renderProjects }
})()