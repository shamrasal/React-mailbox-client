import InboxItems from "./InboxItems";
import classes from "./Index.module.css";
const inbox = () => {
  return (
    <div className={classes.mail}>
      <div className={classes.intro}>
        <h4>Inbox</h4>
      </div>
      <ul>
        <InboxItems />
      </ul>
    </div>
  );
};
export default inbox;
