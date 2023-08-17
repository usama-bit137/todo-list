import { useState } from "react";
import "../styles/Todo.css";
import Form from "./Form.js";
import ActionButton from "./ActionButton";
import edit from "../icons/edit.svg";
import done from "../icons/done.svg";
import remove from "../icons/remove.svg";
import dropdown from "../icons/dropdown.svg";

function HTMLtoJSDate(dateString, timeString) {
  let dateArray = dateString.split("-");
  dateArray[1] = dateArray[1] * 1 - 1;
  return new Date(...dateArray, ...timeString.split(":"));
}

function priorityHashMap(priority) {
  if (priority === "Low") return 0;
  if (priority === "Medium") return 1;
  if (priority === "High") return 2;
}

function TodoList({ todos, setTodos }) {
  const [sortBy, setSortBy] = useState("reversed");
  let sortedTodos;

  if (sortBy === "created") sortedTodos = todos.sort((a, b) => a.id - b.id);

  if (sortBy === "reversed")
    sortedTodos = todos.sort((a, b) => a.id - b.id).reverse();

  if (sortBy === "project")
    sortedTodos = todos.sort((a, b) => a.project.localeCompare(b.project));

  if (sortBy === "priority")
    sortedTodos = todos.sort(
      (a, b) => priorityHashMap(b.priority) - priorityHashMap(a.priority)
    );

  if (sortBy === "datetime")
    sortedTodos = todos.sort(
      (a, b) => HTMLtoJSDate(a.date, a.time) - HTMLtoJSDate(b.date, b.time)
    );

  return (
    <main className="all-todos">
      <div>
        <span>Sort Todos by: </span>
        <select onChange={(e) => setSortBy(e.target.value)}>
          <option value="reversed">Newest-Oldest</option>
          <option value="created">Oldest-Newest</option>
          <option value="project">Project</option>
          <option value="datetime">Deadline</option>
          <option value="priority">Priority</option>
        </select>
      </div>
      <h2 className="todos--title">Current Todos</h2>
      <ul className="todos">
        {sortedTodos.map((todo) => {
          return (
            <Todo
              todos={sortedTodos}
              todo={todo}
              setTodos={setTodos}
              key={todo.id}
            />
          );
        })}
      </ul>
    </main>
  );
}

function Todo({ todo, todos, setTodos }) {
  const [isEdit, setIsEdit] = useState(false);
  return !isEdit ? (
    <DisplayMode
      todo={todo}
      todos={todos}
      setTodos={setTodos}
      isEdit={isEdit}
      setIsEdit={setIsEdit}
    />
  ) : (
    <EditMode
      todo={todo}
      todos={todos}
      setTodos={setTodos}
      isEdit={isEdit}
      setIsEdit={setIsEdit}
    />
  );
}

function DisplayMode({ todo, todos, isEdit, setIsEdit, setTodos }) {
  const [isActive, setIsActive] = useState(false);

  const handleActive = () => {
    setIsActive((isActive) => !isActive);
  };

  const handleEdit = () => {
    setIsEdit(() => !isEdit);
  };

  const handleRemove = (id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };

  return (
    <li onClick={handleActive} className={isActive ? "todo-active" : "todo"}>
      <img
        src={dropdown}
        width="30px"
        className={`icon todo-icon ${!isActive && "dropdown--inactive"}`}
        alt={isActive ? "Show Less" : "Show More"}
      />

      <div className="todo-task">
        <span>
          Task: {todo.task}{" "}
          {!isActive && (
            <>
              |{" "}
              <small>
                Due:{" "}
                {`${HTMLtoJSDate(todo.date, todo.time).toLocaleDateString()}`}
              </small>
            </>
          )}
        </span>

        {isActive && (
          <>
            <ActionButton
              className="edit"
              image={edit}
              imageWidth="12px"
              action={handleEdit}
              alt="Edit Todo"
            />

            <ActionButton
              className="remove"
              image={remove}
              imageWidth="12px"
              action={() => {
                handleRemove(todo.id);
              }}
              alt="Remove Todo"
            />
          </>
        )}
      </div>
      {isActive && (
        <>
          <p className="todo-project">Project: {todo.project}</p>
          <p className="todo-date-time">
            Due:{" "}
            {`${HTMLtoJSDate(
              todo.date,
              todo.time
            ).toDateString()} @ ${HTMLtoJSDate(
              todo.date,
              todo.time
            ).toLocaleTimeString()}`}
          </p>
          <p className="todo-priority">Priority: {todo.priority}</p>
        </>
      )}
    </li>
  );
}

function EditMode({ todo, setTodos, isEdit, setIsEdit }) {
  const [editTodo, setEditTodo] = useState(todo);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditTodo({ ...editTodo, [name]: value });
  };

  const handleEdit = () => {
    setIsEdit(() => !isEdit);
  };

  const handleSubmit = (id) => {
    setTodos((todos) => [editTodo, ...todos.filter((item) => item.id !== id)]);
  };

  return (
    <>
      <Form
        onSubmit={() => {
          handleEdit();
          handleSubmit(editTodo.id);
        }}
        onChange={handleChange}
        title={`Edit todo: ${todo.task} `}
        defaultObj={editTodo}
        action={() => {
          return;
        }}
      >
        <ActionButton image={done} imageWidth="12px" alt="Edit Todo">
          Done
        </ActionButton>
      </Form>
    </>
  );
}

export default TodoList;
