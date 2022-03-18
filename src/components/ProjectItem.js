import React, { useEffect, useState } from "react";
import axios from "axios";
// Material ui
import { MoreHorizOutlined } from "@mui/icons-material";
import Task from "./Task";
import AddTask from "./AddTask";

function ProjectItem({ category }) {
  const [tasks, setTasks] = useState([]);

  // if todo get tasks of todo
  const getTasks = async () => {
    //   /tasks/byCategory?name=TODO
    const { data } = await axios.get(
      process.env.REACT_APP_BACKEND_URL +
        "/" +
        process.env.REACT_APP_TASK_SERVICE +
        "/byCategory?name=" +
        category.name
    );
    setTasks(data);
  };

  // add new task to api
  const addTask = async (categoryId, taskTitle) => {
    const { data } = await axios.post(
      process.env.REACT_APP_BACKEND_URL +
        "/" +
        process.env.REACT_APP_TASK_SERVICE,
      {
        categoryId: categoryId,
        title: taskTitle,
      }
    );
    getTasks();
  };

  // use effect get tasks
  useEffect(() => {
    getTasks();
  }, [category]);

  return (
    <div className="projectView__contentItem" key={category.id}>
      <p className="projectView__contentItemHeader">
        <h3>{category.name}</h3>
        <MoreHorizOutlined className="projectView__contentItemHeaderIcon" />
      </p>
      {/* Task */}
      {tasks && tasks.map((item) => <Task task={item} />)}
      {/* Add task */}
      {<AddTask addTask={addTask} categoryId={category.id} />}
    </div>
  );
}

export default ProjectItem;
