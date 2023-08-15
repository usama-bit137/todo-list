import { useState } from "react";
import "../styles/Todo.css";
import Form from "./Form.js";
import ActionButton from "./ActionButton";
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
    console.log(todos);
  };

  return (
    <li className="todo">
      <img
        src={dropdown}
        width="30px"
        className={`icon ${!isActive && "dropdown--inactive"}`}
        alt={isActive ? "Show Less" : "Show More"}
      />
      <span onClick={handleActive}>Task: {todo.task}</span>

      {isActive && (
        <>
          <ActionButton
            className="edit"
            image={edit}
            action={handleEdit}
            alt="Edit Todo"
          />

          <ActionButton
            className="remove"
            image={remove}
            action={() => {
              handleRemove(todo.id);
            }}
            alt="Remove Todo"
          />

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
  const handleChange = (e) => {};

  const handleEdit = () => {
    setIsEdit((isEdit) => !isEdit);
  };

  const handleSubmit = (e) => {};
  return (
    <>
      <Form
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        title={`Edit todo: ${todo.task} `}
      >
        <ActionButton image={done} alt="Edit Todo" action={handleEdit}>
          Done
        </ActionButton>
      </Form>
    </>
  );
}

export default TodoList;
