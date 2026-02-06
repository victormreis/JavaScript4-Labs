import { useState } from "react";
import uuid from "react-uuid";

import Header from "./components/Header/Header";
import Tasks from "./components/Tasks/Tasks";
import Form from "./components/Form/Form";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: uuid(),
      description: "Walk the dog",
      done: true,
    },
    {
      id: uuid(),
      description: "Wash the car",
      done: false,
    },
    {
      id: uuid(),
      description: "Finish the lab",
      done: false,
    },
  ]);

  const handleClearTasks = () => {
    setTasks([]);
  };

  const handleStatusChange = (id) => {
    const updatedTasks = [...tasks];

    updatedTasks.forEach((task) => {
      if (task.id === id) {
        task.done = !task.done;
      }
    });

    setTasks(updatedTasks);
  };

  const handleTaskRemove = (id) => {
    const filteredTasks = tasks.filter(
      (task) => task.id !== id
    );
    setTasks(filteredTasks);
  };

  const handleAddTask = (description, done) => {
    const newTask = {
      id: uuid(),
      description,
      done,
    };

    setTasks([...tasks, newTask]);
  };

  return (
    <>
      <Header />
      <Tasks
        tasks={tasks}
        onClearTasks={handleClearTasks}
        onStatusChange={handleStatusChange}
        onTaskRemove={handleTaskRemove}
      />
      <hr />
      <Form onAddTask={handleAddTask} />
    </>
  );
}

export default App;
