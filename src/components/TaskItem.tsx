import { useState } from "react";
import "../App.scss";
import { ITask } from "./interfaces";

const TaskItem = ({
  idx,
  onClick,
  task,
}: {
  task: ITask;
  idx: number;
  onClick: () => void;
}) => {
  const [checked, setChecked] = useState(task.isDone || false);

  return (
    <tr
      onClick={(e) => {
        if ((e.target as Element).tagName !== "INPUT") onClick();
      }}
    >
      <td>{++idx}</td>
      <td className="titleContent">{task.title}</td>
      <td className="descriptionContent">{task.description}</td>
      <td>
        <input
          type="checkbox"
          checked={checked}
          onChange={() => {
            const value = !checked;
            setChecked(value);
            task.isDone = value;
          }}
        />
      </td>
    </tr>
  );
};

export default TaskItem;
