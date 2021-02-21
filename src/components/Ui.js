import { store, setLocalStorage } from './storage';
import { renderProjects } from './common';
import Project from './Project'

const pj = new Project()

export default class Ui {
  constructor() {
    this.projectContainer = document.querySelector('.project-list');
  }



  renderProject() {
    this.projectContainer.textContent = '';
    renderProjects(this.projectContainer);
    pj.deleteProject();
  }
}