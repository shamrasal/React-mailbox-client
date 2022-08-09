import { useDispatch } from "react-redux";
import { Authactions } from "../Store/Auth";
import classes from "./Header.module.css";
import SideBar from "./SideBar";
const Header = () => {
  const dispatch = useDispatch();
  const logOutHandler = () => {
    dispatch(Authactions.logout());
  };
  return (
    <div>
      <div className={classes.main}>
        <h1>Welcome to EMail Box</h1>
        <button onClick={logOutHandler}>Log Out</button>
      </div>
      <div>
        <SideBar></SideBar>
      </div>
    </div>
  );
};
export default Header;
