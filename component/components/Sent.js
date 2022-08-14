import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import classes from "./Sent.module.css";
import SentItem from "./SentItem";
const Sent = () => {
  const [list, setList] = useState();
  const sent = useSelector((state) => state.Sent.items);
  const email = useSelector((state) => state.Auth.email);
  console.log(email);
  console.log(sent);

  useEffect(() => {
    fetch(
      `https://email-box-client-default-rtdb.firebaseio.com/${email}/sent.json`,
      {
        method: "GET",
      }
    )
      .then((res) => {
        res.json().then((data) => {
          console.log(data);
          const loadedData = [];
          for (const key in data) {
            loadedData.push({
              id: key,
              key: key,
              date: data[key].date,
              email: data[key].email,
              from: data[key].from,
              seen: data[key].seen,
              sub: data[key].sub,
              text: data[key].text,
            });
          }
          const content = loadedData.map((sent) => (
            <SentItem
              id={sent.id}
              key={sent.key}
              email={sent.email}
              text={sent.text}
              date={sent.date}
              sub={sent.sub}
            />
          ));
          setList(content);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [email]);
  console.log(list);

  return (
    <div className={classes.mail}>
      <div className={classes.intro}>
        <h4>sent</h4>
      </div>
      <ul>{list}</ul>
    </div>
  );
};

export default Sent;
