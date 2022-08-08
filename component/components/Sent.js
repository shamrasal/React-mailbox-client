import React, { useEffect, useState } from "react";
import classes from "./Sent.module.css";
import SentItem from "./SentItem";
const Sent = () => {
  const [SentMails, SetSentMails] = useState();
  useEffect(() => {
    fetch(
      "https://email-box-client-default-rtdb.firebaseio.com/emailsent.json",
      {
        method: "GET",
      }
    )
      .then((res) => {
        res.json().then((data) => {
          const loadedData = [];
          for (const key in data) {
            loadedData.push({
              id: key,
              email: data[key].email,
              text: data[key].text,
              sub: data[key].sub,
              Date: data[key].date,
            });
          }
          console.log(loadedData);
          const content = loadedData.map((sent) => (
            <SentItem
              email={sent.email}
              text={sent.text}
              Date={sent.Date}
              sub={sent.sub}
            />
          ));
          SetSentMails(content);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className={classes.mail}>
      <div className={classes.intro}>
        <h4>sent</h4>
      </div>
      <ul>{SentMails}</ul>
    </div>
  );
};

export default Sent;
