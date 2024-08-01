import { useState } from "react";
import "./TodoList.css";

function TodoList() {
  const [tasks, setTasks] = useState([
    "Do laundry",
    "Learn React",
    "Write a blog",
  ]);

  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    // setNewTask((n) => event.target.value);
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  }

  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    // setTasks((u) => updatedTasks );
    setTasks(updatedTasks);
  }

  function moveUpTask(index) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }
  function moveDownTask(index) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }

  return (
    <div className="todo-wrapper">
      <h1>Todo List</h1>
      <input
        type="text"
        name="item"
        id="item"
        className=""
        value={newTask}
        onChange={handleInputChange}
      />
      <button type="submit" className="add-button" onClick={addTask}>
        Add Task
      </button>
      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <span>{task}</span>
            <button
              type="submit"
              className="delete-button"
              onClick={() => deleteTask(index)}
            >
              Delete
            </button>
            <button
              type="submit"
              className="moveup-button"
              onClick={() => moveUpTask(index)}
            >
              ⬆️
            </button>
            <button
              type="submit"
              className="movedown-button"
              onClick={() => moveDownTask(index)}
            >
              ⬇️
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}
export default TodoList;
