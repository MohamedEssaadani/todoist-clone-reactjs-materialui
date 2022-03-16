// Material ui
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import { Avatar, TextField } from "@mui/material";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
// Styles
import "../styles/Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon className="header__icon" sx={{ color: "white" }} />
        <HomeOutlinedIcon className="header__icon" sx={{ color: "white" }} />
        <input type="text" placeholder="Recherche" />
      </div>
      <div className="header__right">
        <AddOutlinedIcon className="header__icon" />
        <HelpOutlineOutlinedIcon className="header__icon" />
        <NotificationsOutlinedIcon className="header__icon" />
        <Avatar
          sx={{
            height: "30px",
            width: "30px",
            objectFit: "contain",
            cursor: "pointer",
          }}
        >
          {"E"}
        </Avatar>
      </div>
    </div>
  );
}

export default Header;
