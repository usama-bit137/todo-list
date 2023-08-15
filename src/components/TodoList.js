import { useState } from "react";
import "../styles/Todo.css";
import edit from "../icons/edit.svg";
import done from "../icons/done.svg";
import remove from "../icons/remove.svg";
import dropdown from "../icons/dropdown.svg";

function TodoList({ todos, setTodos }) {
  return (
    <>
      <h2>Current Todos</h2>
      <ul className="todos">
        {todos.map((todo) => {
          return (
            <Todo key={todo.id} todos={todos} todo={todo} setTodos={setTodos} />
          );
        })}
      </ul>
    </>
  );
}

function Todo({ todo, todos, setTodos }) {
  const [isEdit, setIsEdit] = useState(false);
  return !isEdit ? (
    <DisplayMode
      todo={todo}
      todos={todos}
      isEdit={isEdit}
      setIsEdit={setIsEdit}
      setTodos={setTodos}
    />
  ) : (
    <EditMode todo={todo} isEdit={isEdit} setIsEdit={setIsEdit} />
  );
}

function DisplayMode({ todo, todos, isEdit, setIsEdit, setTodos }) {
  const [isActive, setIsActive] = useState(false);

  const handleActive = () => {
    setIsActive(() => !isActive);
  };

  const handleEdit = () => {
    setIsEdit(() => !isEdit);
  };

  const handleRemove = (id) => {
    alert(`You have removed ${todo.task}`);
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
    console.log(todos);
  };

  return (
    <li className="todo">
      <span onClick={handleActive}>Task: {todo.task}</span>
      <img
        src={dropdown}
        width="20px"
        className="dropdown"
        alt={isActive ? "Show Less" : "Show More"}
      />
      {isActive && (
        <>
          <button onClick={handleEdit}>
            <span style={{ padding: "12px", fontWeight: "600" }}>Edit</span>
            <img src={edit} width="15px" alt="Edit Todo" />
          </button>
          <button
            onClick={() => {
              handleRemove(todo.id);
            }}
          >
            <span style={{ padding: "12px", fontWeight: "600" }}>Remove</span>
            <img src={remove} width="15px" alt="Remove Todo" />
          </button>

          <h4>Project: {todo.project}</h4>
          <p>Date: {todo.date}</p>
          <p>Time: {todo.time}</p>
          <p>Priority: {todo.priority}</p>
        </>
      )}
    </li>
  );
}

function EditMode({ todo, isEdit, setIsEdit }) {
  const handleEdit = () => {
    setIsEdit(() => !isEdit);
  };
  return (
    <form className="todo--edit">
      <img src={done} width="30px" onClick={handleEdit} alt="Done" />
      <input value={todo.task} name="task" />
      <input value={todo.project} name="project" />
      <input value={todo.date} name="date" />
      <input value={todo.time} name="time" />
      <input value={todo.priority} name="pr" />
    </form>
  );
}

export default TodoList;
