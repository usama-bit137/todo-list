export default class Todo {
  constructor(title, time, date, priority) {
    this.title = title;
    this.time = time;
    this.date = date;
    this.priority = priority;
  }

  displayTodo() {
    return `to do ${this.title} as it is due on ${this.date} at ${this.time} and is ${this.priority}`;
  }
}