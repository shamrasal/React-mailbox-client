import { useSelector } from "react-redux";
import classes from "./Sent.module.css";
import SentItem from "./SentItem";
const Sent = () => {
  const sent = useSelector((state) => state.Sent.items);
  console.log(sent);
  const content = sent.map((sent) => (
    <SentItem
      id={sent.id}
      key={sent.key}
      email={sent.email}
      text={sent.text}
      date={sent.date}
      sub={sent.sub}
    />
  ));

  return (
    <div className={classes.mail}>
      <div className={classes.intro}>
        <h4>sent</h4>
      </div>
      <ul>{content}</ul>
    </div>
  );
};

export default Sent;
