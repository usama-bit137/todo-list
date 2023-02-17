// import { compareAsc, format } from "date-fns";
import headerCreate from "./header"; 
import { sidebarCreate, mainCreate } from "./sidebar";
import Todo from "./todo";
import formCreate from "./form";
import "./style.css";

headerCreate();
sidebarCreate();
mainCreate();

const todo = new Todo("homework", "20:00", "14/02/2023", "high");

todo.displayTodoMain();
todo.displaySidebar();

// const dob = format(new Date(y, m, d), "yyyy-MM-dd");
formCreate();