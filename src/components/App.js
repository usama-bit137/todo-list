import { useState } from "react";
import Header from "./Header";
import TodoList from "./TodoList";
import Form from "./Form";
import ActionButton from "./ActionButton";
import done from "../icons/done.svg";

let todosArray = [
  {
    id: 0,
    task: "Chemistry Homework",
    project: "Homework",
    date: "2023-12-12",
    time: "12:00",
    priority: "Medium",
  },
  {
    id: 1,
    task: "Physics Homework",
    project: "Homework",
    date: "2023-12-10",
    time: "12:00",
    priority: "High",
  },
  {
    id: 2,
    task: "History Homework",
    project: "Homework",
    date: "2023-12-09",
    time: "12:00",
    priority: "Low",
  },
];

function App() {
  const [todos, setTodos] = useState(todosArray);

  const [newTodo, setNewTodo] = useState({});

  const handleChange = (e) => {
    let { name, value } = e.target;
    setNewTodo({ ...newTodo, [name]: value, id: todos.length });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setTodos([
      ...todos,
      {
        ...newTodo,
      },
    ]);

    // Fixes a but where if spams the create button,
    // it will increment the id
    setNewTodo({
      ...newTodo,
      id: newTodo.id + 1,
    });
  };

  return (
    <>
      <Header />
      <TodoList todos={todos} setTodos={setTodos} />
      <Form onChange={handleChange} onSubmit={handleSubmit} title="Create Todo">
        <ActionButton
          image={done}
          imageWidth="25px"
          alt="Create todo"
          action={() => {}}
          className="submit"
        >
          Create Todo
        </ActionButton>
      </Form>
    </>
  );
}

export default App;
