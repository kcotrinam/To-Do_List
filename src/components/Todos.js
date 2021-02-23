import { getProjectIndex, storeTodos, displayTodoForm, renderTodos } from './common';
import { store, setLocalStorage, currentIndex } from './storage';

export default class Todos {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.todoForm = document.querySelector('.todo-form-container');
  }

  get getDeleteBtns() {
    return document.querySelectorAll('.add-todo-btn');
  }

  showForm() {
    const addBtns = this.getDeleteBtns;

    addBtns.forEach(btn => {
      btn.addEventListener('click', e => {
        e.stopPropagation();
        displayTodoForm(this.todoForm)
        currentIndex.id = getProjectIndex(e.target.dataset.id);
      })
    })
  }

  saveTodo() {
    storeTodos(this.title, this.description, this.dueDate, this.priority);
    setLocalStorage();
  }
}