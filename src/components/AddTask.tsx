import { FormEvent, useState } from "react";

interface AddTaskOptions {
  addTaskHandler: (title: string, description: string) => void;
}

const AddTask = ({ addTaskHandler }: AddTaskOptions) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [titleIsValid, titleSetIsValid] = useState(true);
  const [descriptionIsValid, descriptionSetIsValid] = useState(true);

  const addTaskSubmit = (event: FormEvent) => {
    event.preventDefault();
    let isValid = true;
    if (!title.trim()) {
      titleSetIsValid(false);
      isValid = false;
    }
    if (!description.trim()) {
      descriptionSetIsValid(false);
      isValid = false;
    }

    if (isValid) {
      addTaskHandler(title, description);
      setTitle("");
      setDescription("");
      titleSetIsValid(true);
      descriptionSetIsValid(true);
    }
  };

  return (
    <div>
      <form onSubmit={addTaskSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          className={`${!titleIsValid && "invalid"}`}
          type="text"
          id="title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="Enter title"
        />
        <label htmlFor="title">Description:</label>
        <input
          onChange={(event) => setDescription(event.target.value)}
          className={`${!descriptionIsValid && "invalid"}`}
          type="text"
          id="description"
          value={description}
          placeholder="Enter description"
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default AddTask;
