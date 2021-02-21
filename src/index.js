import "./scss/styles.scss";
import Project from './components/Project';
import Ui from './components/Ui';
import { populateStore } from './components/storage';

const UI = new Ui();

const newProjectBtn = document.querySelector('#project-form__btn');
const projectName = document.querySelector('#project-form__name');

newProjectBtn.addEventListener('click', e => {
  e.preventDefault();
  const newProject = new Project(projectName.value);
  newProject.saveProject()
  UI.renderProject()
})

document.addEventListener('DOMContentLoaded', () => {
  populateStore();
  UI.renderProject()
})