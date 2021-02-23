import { store, currentIndex } from './storage';
import { renderProjects, getProjectIndex, renderTodos } from './common';
import Project from './Project'
import Todos from './Todos'

const pj = new Project()
const newTodo = new Todos();

export default class Ui {
  constructor() {
    this.projectContainer = document.querySelector('.project-list');
    this.todos = document.querySelector('.todos-container');
  }

  get getProjectcollection() {
    return document.querySelectorAll('ul li');
  }

  showTodos() {
    const projects = this.getProjectcollection;

    projects.forEach(project => {
      project.addEventListener('click', e => {
        e.stopPropagation();
        currentIndex.id = getProjectIndex(e.target.id)
        renderTodos(this.todos);
      })
    })
  }

  renderProject() {
    this.projectContainer.textContent = '';
    renderProjects(this.projectContainer);
    pj.deleteProject();
    newTodo.showForm();
  }
}