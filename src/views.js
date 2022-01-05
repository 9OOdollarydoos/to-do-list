
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
    //form.action = "";
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

export { displayController };