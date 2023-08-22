import { useState } from "react";
import ActionButton from "./ActionButton";
import edit from "../icons/edit.svg";
import remove from "../icons/remove.svg";
import dropdown from "../icons/dropdown.svg";
import HTMLtoJSDate from "./HTMLtoJSDate";

export default function DisplayMode({ todo, isEdit, setIsEdit, setTodos }) {
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
          {`${todo.task} `}
          {!isActive && (
            <>
              |<small>{` ${HTMLtoJSDate(todo.date, todo.time).toLocaleDateString()} `}</small>|{" "}
              <small>{` ${todo.priority} `}</small>|<small>{` ${todo.project}`}</small>
            </>
          )}
        </span>
        <span className="button-options">
          <ActionButton className="edit" image={edit} imageWidth="12px" action={handleEdit} alt="Edit Todo" />

          <ActionButton
            className="remove"
            image={remove}
            imageWidth="12px"
            action={() => {
              handleRemove(todo.id);
            }}
            alt="Remove Todo"
          />
        </span>
      </div>
      {isActive && (
        <>
          <p className="todo-project">Project: {todo.project}</p>
          <p className="todo-date-time">
            Due:{" "}
            {`${HTMLtoJSDate(todo.date, todo.time).toDateString()} @ ${HTMLtoJSDate(
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
