import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import classes from "./InboxItem.module.css";
const InboxItems = (props) => {
  const email = useSelector((state) => state.Auth.email);
  console.log(props);
  let str = props.text;
  if (str.length > 10) str = str.substring(0, 30);
  let date1 = props.date;
  if (date1.length > 10) date1 = date1.substring(0, 15);
  console.log(date1);
  let from = props.from;
  if (from.length > 10) from = from.substring(0, 15);
  let sub = props.sub;
  if (sub.length > 10) sub = sub.substring(0, 10);
  const deleteHandler = () => {
    fetch(
      `https://email-box-client-default-rtdb.firebaseio.com/${email}/inbox/${props.id}.json`,
      {
        method: "DELETE",
      }
    )
      .then((res) => {
        console.log(res);
        props.retry(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className={classes.list}>
      {!props.seen ? <span className={classes.dot}></span> : ""}
      <Link className={classes.link} to={`/inbox/${props.id}`}>
        <div className={classes.span1}>{from}</div>
        <div className={classes.span2}>
          <span className={classes.sec1}>{sub}</span>
          <span className={classes.sec2}>{str}</span>
        </div>
        <div className={classes.span3}>{date1}</div>
      </Link>
      <div className={classes.span4}>
        <button onClick={deleteHandler} className={classes.button}>
          Delete
        </button>
      </div>
    </div>
  );
};
export default InboxItems;
