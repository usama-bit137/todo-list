import headerCreate from "./header"; 
import sidebarCreate from "./sidebar";
import Todo from "./todo";
import "./style.css";

headerCreate();
sidebarCreate();

const todo = new Todo("homework", "20:00", "14/02/2023", "high");

console.log(todo);