import { FC, useState } from "react";
import "./App.scss";
import AddTask from "./components/AddTask";
import { ITask } from "./components/interfaces";
import TasksList from "./components/TasksList";

const App: FC = () => {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const addTaskHandler = (title: string, description: string) => {
    setTasks((prevTasks) => {
      return [...prevTasks, { title, description }];
    });
  };

  return (
    <div className="App" id="app">
      <AddTask addTaskHandler={addTaskHandler} />
      {tasks.length === 0 ? (
        <p>No tasks found. Maybe add one?</p>
      ) : (
        <TasksList tasks={tasks} />
      )}
    </div>
  );
};

export default App;
