// Styles
import "../styles/ProjectView.css";
// Material ui
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import ProjectItem from "./ProjectItem";
import { useEffect, useState } from "react";
import axios from "axios";

function ProjectView() {
  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    const { data } = await axios.get(
      process.env.REACT_APP_BACKEND_URL +
        "/" +
        process.env.REACT_APP_CATEGORY_SERVICE
    );
    setCategories(data._embedded.categories);
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div className="projectView">
      <div className="projectView__header">
        <h3>Project XYZ</h3>

        <div className="projectView__headerInfos">
          <p className="projectView__headerInfosItem">
            <ChatBubbleOutlineOutlinedIcon />
            <span>Commentaires</span>
          </p>
          <p className="projectView__headerInfosItem">
            <PersonOutlinedIcon />
            <span>4</span>
          </p>
          <p className="projectView__headerInfosItem">
            <VisibilityOutlinedIcon />
            <span>Vue</span>
          </p>
          <p className="projectView__headerInfosItem">
            <MoreHorizOutlinedIcon />
          </p>
        </div>
      </div>

      <div className="projectView__content">
        {categories.map((category) => {
          return <ProjectItem category={category} />;
        })}
      </div>
    </div>
  );
}

export default ProjectView;
