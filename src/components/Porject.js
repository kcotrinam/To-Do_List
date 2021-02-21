export default class Project {
  constructor(name) {
    this.name = name;
  }

  get showName() {
    console.log(this.name)
  }
}