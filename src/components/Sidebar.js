// Material ui
import InboxOutlinedIcon from "@mui/icons-material/InboxOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
// Styles
import "../styles/Sidebar.css";

function Sidebar() {
  const menuItem = (Icon, title, color) => (
    <div className="sidebar__menuItem">
      <Icon style={{ color: color }} />
      <p>{title}</p>
    </div>
  );
  return (
    <div className="sidebar">
      <div className="sidebar__menu">
        {menuItem(InboxOutlinedIcon, "Boîte de réception", "#246FE0")}
        {menuItem(CalendarTodayOutlinedIcon, "Aujourd'hui", "#048527")}
        {menuItem(CalendarMonthOutlinedIcon, "Prochainement", "#692FC2")}
        {menuItem(AppsOutlinedIcon, "Filtres et étiquettes", "#EA8915")}

        <div className="sidebar__projectsMenu">
          <div className="sidebar__projectsMenuProject">
            <p>Projets</p>
          </div>
          <div className="sidebar__projectsMenuArchived">
            <p>Projets Archivés</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
