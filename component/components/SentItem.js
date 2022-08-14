import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import classes from "./SentItem.module.css";
const SentItem = (props) => {
  const email1 = useSelector((state) => state.Auth.email);

  // console.log(props);
  let str = props.text;
  if (str.length > 10) str = str.substring(0, 30);
  // const year = props.date.getFullYear().toString();
  // const month = props.date.getMonth().toString();
  // const day = props.date.getDate().toString();

  let date1 = props.date;
  if (date1.length > 10) date1 = date1.substring(0, 15);
  console.log(date1);
  let email = props.email;
  if (email.length > 10) email = email.substring(0, 15);
  let sub = props.sub;
  if (sub.length > 10) sub = sub.substring(0, 10);
  const deleteHandler = () => {
    console.log(props.id);
    fetch(
      `https://email-box-client-default-rtdb.firebaseio.com/${email1}/sent/${props.id}.json`,
      {
        method: "DELETE",
      }
    )
      .then((res) => {
        console.log(res);
        props.retry((prev) => !prev);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className={classes.list}>
      <Link className={classes.link} to={`/sent/${props.id}`}>
        <div className={classes.span1}>{email}</div>
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
export default SentItem;
