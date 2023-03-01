import { ITask } from "./interfaces";

const TaskModal = ({
  onClose,
  task,
}: {
  task?: ITask;
  onClose: () => void;
}) => {
  return (
    <div className="dialog">
      <h3>{task?.title}</h3>
      <p>{task?.description}</p>
      <span>STATUS</span>
      <input type="checkbox" readOnly checked={task?.isDone as any} />
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default TaskModal;
