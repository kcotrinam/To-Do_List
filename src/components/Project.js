import { setLocalStorage, store } from './storage';
import { storeProject, deleteElementFromDOM, getProjectIndex } from './common';

export default class Project {
  constructor(name) {
    this.name = name;
  }

  get getDeleteBtns() {
    return document.querySelectorAll('.delete-pj-btn');
  }

  deleteProject() {
    const btns = this.getDeleteBtns;
    btns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const projectIndex = getProjectIndex(e.target.dataset.id);
        store.splice(projectIndex, 1)
        setLocalStorage()
        deleteElementFromDOM(e.target.dataset.id)
      })
    });
  }

  saveProject() {
    storeProject(this.name)
    setLocalStorage()
  }
}
