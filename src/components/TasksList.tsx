import { useState } from "react";
import "../App.scss";
import { ITask } from "./interfaces";
import TaskItem from "./TaskItem";
import TaskModal from "./TaskModal";

interface Props {
  tasks: ITask[];
}

const TasksList = ({ tasks }: Props) => {
  const [task, setTask] = useState<ITask>();
  return (
    <div>
      {task ? (
        <TaskModal task={task} onClose={() => setTask(undefined)} />
      ) : (
        <></>
      )}
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>TITLE</th>
            <th>DESCRIPTION</th>
            <th>STATUS</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((item: ITask, indx) => {
            return (
              <TaskItem
                key={item.title}
                idx={indx}
                task={item}
                onClick={() => setTask(item)}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TasksList;
