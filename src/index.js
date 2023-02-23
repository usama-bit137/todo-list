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

const myTodo = [new Todo("homework", "untitled", "20:00", "12/12/2023", "high"), new Todo("maths", "homework", "09:00", "12/02/2023", "high"), new Todo("chem", "homework", "08:00", "12/02/2023", "high"), new Todo("physics", "homework", "12:00", "12/03/2023", "high"), new Todo("history", "homework", "10:00", "12/03/2023", "high")];
for (let j = 0; j < myTodo.length; j++) {
    myTodo[j].displayTodoMain();
    myTodo[j].displaySidebar();
}
function creationEvent() {
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