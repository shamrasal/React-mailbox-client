import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import classes from "./InboxDetails.module.css";
const SentDetails = () => {
  const [item, setItem] = useState("");
  const email = useSelector((state) => state.Auth.email);
  const param = useParams();
  console.log(param);
  useEffect(() => {
    fetch(
      `https://email-box-client-default-rtdb.firebaseio.com/${email}/sent/${param.productId}.json`
    )
      .then((res) => {
        res.json().then((data) => {
          console.log(data);
          setItem(data);
        });
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [param.productId, email]);
  console.log(item);
  return (
    <div className={classes.mail}>
      <div className={classes.border}>
        <div className={classes.span1}>
          <span className={classes.section1}>{item.sub}</span>
          <span className={classes.section2}>
            <div>{item.from}</div>
            <div>{item.date}</div>
          </span>
        </div>
        <div className={classes.span2}>
          <span>{item.text}</span>
        </div>
      </div>
    </div>
  );
};

export default SentDetails;
