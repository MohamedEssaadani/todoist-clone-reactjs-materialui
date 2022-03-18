import React, { useEffect, useState } from "react";
import axios from "axios";
// Material ui
import RadioButtonUncheckedOutlinedIcon from "@mui/icons-material/RadioButtonUncheckedOutlined";
import { MoreHorizOutlined } from "@mui/icons-material";

function ProjectItem({ category, addTaskJSX }) {
  const [tasks, setTasks] = useState([]);

  // if todo get tasks of todo
  const getTasks = async () => {
    //   /tasks/byCategory?name=TODO
    const { data } = await axios.get(
      process.env.REACT_APP_BACKEND_URL +
        "/" +
        process.env.REACT_APP_TASK_SERVICE +
        "/byCategory?name=" +
        category
    );

    setTasks(data);
  };

  // if in progress get tasks of in progress
  const getInProgress = () => {
    console.log(category);
    setTasks([
      {
        id: 1,
        title: "xyz in progress",
      },
      {
        id: 2,
        title: "sss inprogress",
      },
    ]);
  };

  // if done get tasks of done
  const getDone = () => {
    console.log(category);
  };

  useEffect(() => {
    getTasks();
  }, [category]);
  // task jsx
  const task = (id, title) => (
    <div className="projectView__contentItemTask" key={id}>
      <RadioButtonUncheckedOutlinedIcon />
      <p>{title}</p>
    </div>
  );

  return (
    <div className="projectView__contentItem">
      <p className="projectView__contentItemHeader">
        <h3>{category}</h3>
        <MoreHorizOutlined className="projectView__contentItemHeaderIcon" />
      </p>
      {/* Task */}
      {tasks.map((item) => task(item.id, item.title))}
      {/* Add task */}
      {addTaskJSX()}
    </div>
  );
}

export default ProjectItem;
