import headerCreate from "./header"; 
import { sidebarCreate, mainCreate } from "./sidebar";
import Todo from "./todo";
import formCreate, { displayRadioValue } from "./form";
import { dateShow } from "./orderShow";
import "./style.css";

// initialize the default page: 
headerCreate();
sidebarCreate();
mainCreate();
formCreate();

const myTodo = [new Todo("homework", "untitled", "20:00", "12/12/2023", "high"), new Todo("maths", "homework", "09:00", "12/02/2023", "high"), new Todo("chem", "homework", "08:00", "12/02/2023", "high"), new Todo("physics", "homework", "12:00", "12/03/2023", "high"), new Todo("history", "homework", "10:00", "12/03/2023", "high")];
/*
// save to storage:
const myJSON = JSON.stringify(myTodo);
localStorage.setItem("myTodoJSON", myJSON);
*/
// Retrieve: 
const text = localStorage.getItem("myTodoJSON"); 
const obj = JSON.parse(text);

const todoObject = [];
// eslint-disable-next-line no-plusplus
for (let i = 0; i < obj.length; i++) {
  todoObject.push(new Todo(obj[i].title, obj[i].project, obj[i].time, obj[i].date, obj[i].priority))
}

function resetPage() {
    const sideMain = document.querySelector(".sideMain");
    sideMain.innerHTML = " ";
    sidebarCreate();
    mainCreate();
    formCreate();
};

function displayTodos(array) {
    // eslint-disable-next-line no-plusplus
    for (let j = 0; j < array.length; j++) {
        array[j].displayTodoMain();
        array[j].displaySidebar();
    };
};

// initialize the display of default todos: 
displayTodos(myTodo);
displayTodos(todoObject);

const createButton = document.querySelector(".create-todo");
createButton.addEventListener("click", () =>{
    const title = document.getElementById("title-id").value;
    const project = document.getElementById("project-id").value; 
    const date = document.getElementById("date-id").value;
    const time = document.getElementById("time-id").value;
    const priority = displayRadioValue();
    const newTodo = new Todo(title, project, time, date, priority);
    
    resetPage(); 

    todoObject.push(newTodo);
    displayTodos(todoObject);
    const newJSON = JSON.stringify(todoObject);
    localStorage.setItem("myTodoJSON", newJSON);   
    console.log(todoObject);
})

const dateOrder = document.querySelector(".date-order");
dateOrder.addEventListener("click", () => { 
    resetPage();
    const dateOrderArray = dateShow(todoObject);
    displayTodos(dateOrderArray); 
    console.table(dateOrderArray);
    console.table(todoObject);
})

const unorder = document.querySelector(".unorder");
unorder.addEventListener("click", () => { 
    resetPage();
    displayTodos(todoObject);
    console.table(todoObject);
})
