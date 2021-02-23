const store = [
];

const currentIndex = { id: 0 }

const setLocalStorage = () => {
  window.localStorage.setItem('todos', JSON.stringify(store));
};

const populateStore = () => {
  const colletion = JSON.parse(window.localStorage.getItem('todos'));
  if (colletion) {
    colletion.forEach(el => {
      store.push(el);
    });
  }
};

export { setLocalStorage, populateStore, store, currentIndex };