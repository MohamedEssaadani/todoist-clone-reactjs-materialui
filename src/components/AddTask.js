import React, { useState } from "react";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";

const AddTask = ({ categoryId, addTask }) => {
  const [toggleInput, setToggleInput] = useState(false);
  const [taskTitle, setTaskTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setTaskTitle("");
    addTask(categoryId, taskTitle);
  };
  return (
    <div
      className="projectView__addTask"
      onDoubleClick={() => setToggleInput(!toggleInput)}
    >
      <AddOutlinedIcon />
      {toggleInput ? (
        <form>
          <input
            type={"text"}
            className="projectView__addTaskInput"
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
            placeholder="ex: doing..."
          />
          <button onClick={handleSubmit} type="submit" hidden></button>
        </form>
      ) : (
        <p>Ajouter une tache </p>
      )}
    </div>
  );
};

export default AddTask;
