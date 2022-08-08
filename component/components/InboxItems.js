import classes from "./InboxItem.module.css";
const InboxItems = () => {
  return (
    <div className={classes.list}>
      <div>{"sham@test.com"}</div>
      <div>{"hello sir i have a new job for you..."}</div>
      <div>{"25/2/2022"}</div>
    </div>
  );
};
export default InboxItems;
