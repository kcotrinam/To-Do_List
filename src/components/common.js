import { store } from './storage';

const storeProject = (projectName) => {
  store.push({
    projectName: projectName,
    todos: []
  })
  console.log(store)
}

const storeTodos = (projectIdx) => {
  store[projectIdx].todos.push('hello')
}

const renderProjects = (container) => {
  store.forEach(project => {
    const li = `
                <li id="${sanitizeId(project.projectName)}">${project.projectName}
                  <span>
                    <i class="fa fa-times delete-pj-btn" data-id="${sanitizeId(project.projectName)}"></i>
                    <i class="fas fa-plus mr-4 add-todo-btn" data-id="${sanitizeId(project.projectName)}"></i>

                  </span>
                </li>
                `
    container.insertAdjacentHTML('afterbegin', li)
  })
}

const deleteElementFromDOM = (id) => document.querySelector(`#${id}`).remove()

const getProjectIndex = (id) => store.findIndex(pj => sanitizeId(pj.projectName) === id)

const sanitizeId = (text) => text.split(' ').join('');

export { storeProject, storeTodos, renderProjects, sanitizeId, getProjectIndex, deleteElementFromDOM }