import classes from "./Header.module.css";
import SideBar from "./SideBar";
const Header = () => {
  return (
    <div>
      <div className={classes.main}>
        <h1>Welcome to EMail Box</h1>
      </div>
      <div>
        <SideBar></SideBar>
      </div>
    </div>
  );
};
export default Header;
