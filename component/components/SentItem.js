import classes from "./SentItem.module.css";
const SentItem = (props) => {
  let str = props.text;
  console.log(str);
  if (str.length > 10) str = str.substring(0, 10);
  let date = props.Date;
  console.log(date);
  if (date.length > 10) date = date.substring(0, 10);

  console.log(props);
  return (
    <div className={classes.list}>
      <div className={classes.span1}>{props.email}</div>
      <div className={classes.span2}>{str}</div>
      <div className={classes.span3}>{date}</div>
    </div>
  );
};
export default SentItem;
