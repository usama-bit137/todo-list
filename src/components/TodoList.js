import { useState } from "react";

function TodoList({ todos }) {
  return (
    <>
      <h4>Current Todos</h4>
      <ul>
        {todos.map((todo) => {
          return (
            <Todo
              key={todos.indexOf(todo)}
              task={todo.task}
              project={todo.project}
              date={todo.date}
              time={todo.time}
              priority={todo.priority}
            />
          );
        })}
      </ul>
    </>
  );
}

function Todo(props) {
  const [isActive, setIsActive] = useState(false);

  const handleActive = () => {
    setIsActive((isActive) => !isActive);
  };

  return (
    <li className="todo">
      <h3 onClick={handleActive}>Task: {props.task}</h3>
      {isActive && (
        <>
          <h4>Project: {props.project}</h4>
          <p>Date: {props.date}</p>
          <p>Time: {props.time}</p>
          <p>Priority: {props.priority}</p>
        </>
      )}
    </li>
  );
}

export default TodoList;
