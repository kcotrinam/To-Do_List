import { getProjectIndex, storeTodos } from './common';
import Project from './Project';
import { store } from './storage';

export default class Todos {
  constructor() { }

  get getDeleteBtns() {
    return document.querySelectorAll('.add-todo-btn');
  }

  showForm() {
    const addBtns = this.getDeleteBtns;

    addBtns.forEach(btn => {
      btn.addEventListener('click', e => {
        const projcetIdx = getProjectIndex(e.target.dataset.id);
        storeTodos(projcetIdx)
        console.log(store[projcetIdx].todos)
      })
    })
  }
}