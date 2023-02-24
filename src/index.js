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
const myTodoUnordered = myTodo;

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

const createButton = document.querySelector(".create-todo");
createButton.addEventListener("click", () =>{
    const title = document.getElementById("title-id").value;
    const project = document.getElementById("project-id").value; 
    const date = document.getElementById("date-id").value;
    const time = document.getElementById("time-id").value;
    const priority = displayRadioValue();
    const newTodo = new Todo(title, project, time, date, priority);
    myTodo.push(newTodo);
    
    newTodo.displaySidebar();
    newTodo.displayTodoMain(); 
    console.log(myTodo);
})

const dateOrder = document.querySelector(".date-order");
dateOrder.addEventListener("click", () => { 
    resetPage();
    const dateOrderArray = dateShow(myTodo);
    displayTodos(dateOrderArray); 

    console.table(dateOrderArray);
    console.table(myTodoUnordered);
})


const unorder = document.querySelector(".unorder");
unorder.addEventListener("click", () => { 
    resetPage();
    displayTodos(myTodoUnordered);

    console.table(myTodoUnordered);
})


