import { NavLink } from "react-router-dom";
import classes from "./SideBar.module.css";
const SideBar = () => {
  return (
    <div className={classes.side}>
      <NavLink className={classes.link} to={"/compose"}>
        Compose Mail
      </NavLink>
      <NavLink className={classes.link} to={"/compose"}>
        sent
      </NavLink>
    </div>
  );
};
export default SideBar;
