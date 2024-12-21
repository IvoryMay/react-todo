import React, { useState } from "react";
import Heading from "./components/Heading";
import CreateTask from "./components/CreateTask";
import TaskList from "./components/TaskList";

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, task: "Finish project report", isDone: false },
    { id: 2, task: "Buy groceries", isDone: false },
    { id: 3, task: "Schedule dentist appointment", isDone: true },
    { id: 4, task: "Plan birthday party", isDone: false },
    { id: 5, task: "Read new book", isDone: false },
  ]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const doneTask = (id) => {
    setTasks(
      tasks.map((el) => (el.id === id ? { ...el, isDone: !el.isDone } : el))
    );
  };

  return (
    <div className="p-10">
      <Heading />
      <CreateTask addTask={addTask} />
      <TaskList doneTask={doneTask} tasks={tasks} removeTask={removeTask} />
    </div>
  );
};

export default App;
