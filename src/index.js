import { format } from "date-fns";
import headerCreate from "./header"; 
import { sidebarCreate, mainCreate } from "./sidebar";
import Todo from "./todo";
import formCreate, { displayRadioValue } from "./form";
import { priorityShow, projectShow, dateShow } from "./orderShow";
import "./style.css";

// generate the default page: 
headerCreate();
sidebarCreate();
mainCreate();
formCreate();

const myTodo = [new Todo("homework", "untitled", "20:00", "12/12/2023", "high")];
myTodo[0].displayTodoMain();
myTodo[0].displaySidebar();


const createButton = document.querySelector(".create-todo");
createButton.addEventListener("click", () =>{
    const title = document.getElementById("title-id").value;
    const project = document.getElementById("project-id").value; 
    const date = new Date(Date.parse(document.getElementById("date-id").value), "dd/MM/yyyy");
    const time = document.getElementById("time-id").value;
    const priority = displayRadioValue();
    const newTodo = new Todo(title, project, time, date, priority);
    myTodo.push(newTodo);
    
    newTodo.displaySidebar();
    newTodo.displayTodoMain(); 
    console.log(myTodo);
})