export default class Todo {
  constructor(title, time, date, priority) {
    this.title = title;
    this.time = time;
    this.date = date;
    this.priority = priority;
  }

  displayTodoMain() {
    const mainBox = document.querySelector(".mainBox");
    
    const element = document.createElement("div"); 
    const titleElement = document.createElement("div");
    const dateElement = document.createElement("div"); 
    const timeElement = document.createElement("div");
    const priorityElement = document.createElement("div");

    element.classList.add("element");
    titleElement.classList.add("title-element");
    dateElement.classList.add("date-element");
    timeElement.classList.add("time-element");
    priorityElement.classList.add("priority-element");
   
    titleElement.textContent = `${this.title}`;
    dateElement.textContent = `due date: ${this.date}`;
    timeElement.textContent = `time: ${this.time}`;
    priorityElement.textContent = `priority: ${this.priority}`;

    element.appendChild(titleElement);
    element.appendChild(dateElement);
    element.appendChild(timeElement);
    element.appendChild(priorityElement);
    mainBox.appendChild(element);
  }

  displaySidebar() {
    const sidebar = document.querySelector(".sidebar");
    const elementSidebar = document.createElement("div");
    elementSidebar.classList.add("sidebar-element");

    elementSidebar.textContent = `${this.title}`;
    sidebar.appendChild(elementSidebar);
  }
}
