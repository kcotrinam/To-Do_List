import "./scss/styles.scss";
import Project from './components/Porject'

const newProjectBtn = document.querySelector('#project-form__btn');
const projectName = document.querySelector('#project-form__name');

newProjectBtn.addEventListener('click', e => {
  e.preventDefault();
  const newProject = new Project(projectName.value);
  newProject.showName
})