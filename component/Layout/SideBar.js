import { NavLink } from "react-router-dom";
import classes from "./SideBar.module.css";
const SideBar = () => {
  return (
    <div className={classes.side}>
      <NavLink
        activeClassName={classes.link1}
        className={classes.link}
        to={"/inbox"}
      >
        Inbox
      </NavLink>
      <NavLink className={classes.link} to={"/compose"}>
        Compose Mail
      </NavLink>
      <NavLink className={classes.link} to={"/sent"}>
        sent
      </NavLink>
    </div>
  );
};
export default SideBar;
