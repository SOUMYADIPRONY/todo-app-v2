import "./App.css";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";

function App() {
  const todoItems = [
    {
      name: "Learn React",
      dueDate: "16/2/2024",
    },
    {
      name: "Buy PS5",
      dueDate: "17/2/2024",
    },
    {
      name: "Solve Problems",
      dueDate: "17/2/2024",
    },
  ];
  return (
    <center className="todo-container">
      <AppName></AppName>
      <AddTodo></AddTodo>
      <TodoItems todoItems={todoItems}></TodoItems>
    </center>
  );
}

export default App;
