import { useEffect, useState } from "react";
import Header from "./Header";
import TodoList from "./TodoList";
import Form from "./Form";
import ActionButton from "./ActionButton";
import done from "../icons/done.svg";

function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("my-todos");
    if (savedTodos) {
      const initialValue = JSON.parse(savedTodos);
      return initialValue;
    } else {
      return [];
    }
  });

  const [newTodo, setNewTodo] = useState({ priority: "Low" });

  useEffect(() => {
    const data = localStorage.getItem("my-todos");
    if (data) setTodos(JSON.parse(data));
  }, []);

  useEffect(() => {
    localStorage.setItem("my-todos", JSON.stringify(todos));
  });

  const handleChange = (e) => {
    let { name, value } = e.target;

    setNewTodo({
      ...newTodo,
      [name]: value,
      id: todos.length,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setTodos([
      ...todos,
      {
        ...newTodo,
      },
    ]);

    setNewTodo({
      ...newTodo,
      id: newTodo.id + 1,
    });
  };

  return (
    <>
      <Header />

      <main id="main-content">
        <TodoList todos={todos} setTodos={setTodos} />
        <Form onChange={handleChange} onSubmit={handleSubmit} title="todo or not todo">
          <ActionButton image={done} imageWidth="25px" alt="Create todo" action={() => {}} className="submit">
            Create Todo
          </ActionButton>
        </Form>
      </main>
    </>
  );
}

export default App;
