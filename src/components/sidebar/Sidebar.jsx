import "./Sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import ViewStreamOutlinedIcon from "@mui/icons-material/ViewStreamOutlined";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import PollIcon from "@mui/icons-material/Poll";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsSystemDaydreamIcon from "@mui/icons-material/SettingsSystemDaydream";
import PsychologyIcon from "@mui/icons-material/Psychology";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="sidebar">
      <div className="parent">
        <div className="top">
          <a href="/" className="logo">
            <img src='./logo.png' alt='logo' height={40} width={40}/>
          </a>
        </div>
        <hr />
        <div className="center">
          <ul>
            <p className="title">MAIN</p>
            <Link to="/" style={{ textDecoration: "none" }}>
              <li>
                <DashboardIcon className="icon" /> <span>Dashboard</span>
              </li>
            </Link>
            <p className="title">LISTS</p>
            <Link to="/users" style={{ textDecoration: "none" }}>
              <li>
                <PersonOutlineOutlinedIcon className="icon" /> <span>User</span>
              </li>
            </Link>

            <li>
              <Inventory2OutlinedIcon className="icon" /> <span>Products</span>
            </li>

            <li>
              <ViewStreamOutlinedIcon className="icon" /> <span>Orders</span>
            </li>

            <li>
              <LocalShippingIcon className="icon" /> <span>Delivery</span>
            </li>
            <p className="title">USEFUL</p>

            <li>
              <PollIcon className="icon" /> <span>Stats</span>
            </li>

            <li>
              <NotificationsIcon className="icon" /> <span>Notifications</span>
            </li>
            <p className="title">SERVICE</p>

            <li>
              <SettingsSystemDaydreamIcon className="icon" />{" "}
              <span>System Health</span>
            </li>

            <li>
              <PsychologyIcon className="icon" /> <span>Logs</span>
            </li>

            <li>
              <SettingsApplicationsIcon className="icon" />{" "}
              <span>Settings</span>
            </li>
            <p className="title">USER</p>

            <li>
              <AccountCircleIcon className="icon" /> <span>Profile</span>
            </li>

            <li>
              <ExitToAppIcon className="icon" /> <span>Logout</span>
            </li>
          </ul>
          <div className="bottom">
            <div
              className="colorOption"
              onClick={() => dispatch({ type: "LIGHT" })}
            ></div>
            <div
              className="colorOption"
              onClick={() => dispatch({ type: "DARK" })}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
