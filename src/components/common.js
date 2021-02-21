import { store } from './storage';

const storeProject = (projectName) => {
  store.push({
    projectName : projectName,
    todos: []
  })
  console.log(store)
}

const renderProjects = (container) => {
  store.forEach(project => {
      const li =  `
                  <li id="${sanitizeId(project.projectName)}">${project.projectName}
                    <a href="#" class="delete-pj-btn" id="${sanitizeId(project.projectName)}">Delete</a>
                  </li>
                  `
      container.insertAdjacentHTML('afterbegin', li)
    })
}

const deleteElementFromDOM = (id) => {
  document.querySelector(`#${id}`).remove()
}

const getProjectIndex = (id) => store.findIndex(pj => sanitizeId(pj.projectName) === id)

const sanitizeId = (text) => text.split(' ').join('');

export { storeProject, renderProjects, sanitizeId, getProjectIndex, deleteElementFromDOM }