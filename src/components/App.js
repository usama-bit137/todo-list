import { useEffect, useState } from "react";
import Header from "./Header";
import TodoList from "./TodoList";
import Form from "./Form";
import ActionButton from "./ActionButton";
import done from "../icons/done.svg";

function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("my-todos");
    const initialValue = JSON.parse(savedTodos);
    return initialValue;
  });
  const [newTodo, setNewTodo] = useState({});

  useEffect(() => {
    const data = localStorage.getItem("my-todos");
    if (data) setTodos(JSON.parse(data));
  }, []);

  useEffect(() => {
    localStorage.setItem("my-todos", JSON.stringify(todos));
  });

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
