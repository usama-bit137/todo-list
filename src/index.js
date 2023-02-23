import { format } from "date-fns";
import headerCreate from "./header"; 
import { sidebarCreate, mainCreate } from "./sidebar";
import Todo from "./todo";
import formCreate, { displayRadioValue } from "./form";
import { dateShow } from "./orderShow";
import "./style.css";

// generate the default page: 
headerCreate();
sidebarCreate();
mainCreate();
formCreate();

const myTodo = [new Todo("homework", "untitled", "20:00", "12/12/2023", "high")];
myTodo[0].displayTodoMain();
myTodo[0].displaySidebar();

function creationEvent() {
    const createButton = document.querySelector(".create-todo");
    createButton.addEventListener("click", () =>{
        const title = document.getElementById("title-id").value;
        const project = document.getElementById("project-id").value; 
        const date = format(Date.parse(document.getElementById("date-id").value), "dd/MM/yyyy");
        const time = document.getElementById("time-id").value;
        const priority = displayRadioValue();
        const newTodo = new Todo(title, project, time, date, priority);
        myTodo.push(newTodo);
        
        newTodo.displaySidebar();
        newTodo.displayTodoMain(); 
        console.log(myTodo);
    })
}
creationEvent();

const dateOrder = document.querySelector(".date-order");
dateOrder.addEventListener("click", () => { 
    const sideMain = document.querySelector(".sideMain");
    sideMain.innerHTML = " ";
    sidebarCreate();
    mainCreate();
    formCreate();
    
    const dateOrderArray = dateShow(myTodo);
    console.table(dateOrderArray);
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < dateOrderArray.length; i++) {
        dateOrderArray[i].displayTodoMain(); 
        dateOrderArray[i].displaySidebar(); 
    }
    creationEvent();
})