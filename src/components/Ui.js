import { store, setLocalStorage } from './storage';
import { renderProjects } from './common';
import Project from './Project'
import Todos from './Todos'

const pj = new Project()
const newTodo = new Todos();

export default class Ui {
  constructor() {
    this.projectContainer = document.querySelector('.project-list');
  }



  renderProject() {
    this.projectContainer.textContent = '';
    renderProjects(this.projectContainer);
    pj.deleteProject();
    newTodo.showForm();
  }
}