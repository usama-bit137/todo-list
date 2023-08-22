import { useEffect, useState } from "react";
import "../styles/Todo.css";
import DisplayMode from "./DisplayMode";
import EditMode from "./EditMode";
import HTMLtoJS from "./HTMLtoJSDate";

function priorityHash(priority) {
  if (priority === "Low") return 0;
  if (priority === "Medium") return 1;
  if (priority === "High") return 2;
}

function TodoList({ todos, setTodos }) {
  const [sortBy, setSortBy] = useState("reversed");
  let sortedTodos;

  if (sortBy === "created") sortedTodos = todos.sort((a, b) => a.id - b.id);
  if (sortBy === "reversed") sortedTodos = todos.sort((a, b) => a.id - b.id).reverse();
  if (sortBy === "project") sortedTodos = todos.sort((a, b) => a.project.localeCompare(b.project));
  if (sortBy === "priority") sortedTodos = todos.sort((a, b) => priorityHash(b.priority) - priorityHash(a.priority));
  if (sortBy === "date") sortedTodos = todos.sort((a, b) => HTMLtoJS(a.date, a.time) - HTMLtoJS(b.date, b.time));

  return (
    <main className="all-todos">
      <div className="all-todos--title">
        <h2 className="todos--title">what todo?</h2>
        <div>
          <small style={{ fontWeight: 800 }}>sort todos </small>
          <select onChange={(e) => setSortBy(e.target.value)} className="sorting">
            <option value="reversed">Newest-Oldest</option>
            <option value="created">Oldest-Newest</option>
            <option value="project">Project</option>
            <option value="date">Deadline</option>
            <option value="priority">Priority</option>
          </select>
        </div>
      </div>
      <ul className="todos">
        {sortedTodos.map((todo) => {
          return (
            <>
              <h3>{sortBy === "date" ? todo[sortBy].split("-").reverse().join("/") : todo[sortBy]}</h3>
              <Todo todos={sortedTodos} todo={todo} setTodos={setTodos} key={todo.id} />
            </>
          );
        })}
      </ul>
    </main>
  );
}

function Todo({ todo, todos, setTodos }) {
  const [isEdit, setIsEdit] = useState(false);
  return !isEdit ? (
    <DisplayMode todo={todo} todos={todos} setTodos={setTodos} isEdit={isEdit} setIsEdit={setIsEdit} />
  ) : (
    <EditMode todo={todo} todos={todos} setTodos={setTodos} isEdit={isEdit} setIsEdit={setIsEdit} />
  );
}

export default TodoList;
