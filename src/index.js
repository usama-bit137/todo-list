import headerCreate from "./header"; 
import { sidebarCreate, mainCreate } from "./sidebar";
import Todo from "./todo";
import "./style.css";

headerCreate();
sidebarCreate();
mainCreate();

const todo = new Todo("homework", "20:00", "14/02/2023", "high");

todo.displayTodo();
console.log(todo.titleReturn());
