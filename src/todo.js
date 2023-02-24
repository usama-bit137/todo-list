import { format } from "date-fns";

export default class Todo {
  constructor(title, project, time, date, priority) {
    this.title = title;
    this.project = project;
    this.time = time;
    this.date = date;
    this.priority = priority;
  }

  displayTodoMain() {
    const mainBox = document.querySelector(".mainBox");
    const formGrid = document.querySelector(".form-grid");
    
    const element = document.createElement("div"); 
    const titleElement = document.createElement("div");
    const projectElement = document.createElement("div");
    const dateElement = document.createElement("div"); 
    const timeElement = document.createElement("div");
    const priorityElement = document.createElement("div");

    element.classList.add("element");
    titleElement.classList.add("title-element");
    projectElement.classList.add("project-element");
    dateElement.classList.add("date-element");
    timeElement.classList.add("time-element");
    priorityElement.classList.add("priority-element");
   
    titleElement.textContent = `${this.title}`;
    projectElement.textContent = `project: ${this.project}`;
    dateElement.textContent = `due date: ${format(Date.parse(this.date), "dd/MM/yyyy")}`;
    timeElement.textContent = `time: ${this.time}`;
    priorityElement.textContent = `priority: ${this.priority}`;

    element.appendChild(titleElement);
    element.appendChild(projectElement);
    element.appendChild(dateElement);
    element.appendChild(timeElement);
    element.appendChild(priorityElement);
    mainBox.insertBefore(element, formGrid);
  }

  displaySidebar() {
    const sidebar = document.querySelector(".sidebar");
    const elementSidebar = document.createElement("div");
    elementSidebar.classList.add("sidebar-element");
    elementSidebar.textContent = `${this.title}`;
    
    sidebar.appendChild(elementSidebar);
  }
}
