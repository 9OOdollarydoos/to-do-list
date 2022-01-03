
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

export { displayController };