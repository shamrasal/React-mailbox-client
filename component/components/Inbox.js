import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import InboxItems from "./InboxItems";
import classes from "./Index.module.css";
const Inbox = () => {
  const [inboxlist, setInboxList] = useState();
  const [unseenMail, setUnseenMail] = useState();
  const [retry, setretry] = useState(false);
  console.log(retry);
  const email = useSelector((state) => state.Auth.email);
  useEffect(() => {
    fetch(
      `https://email-box-client-default-rtdb.firebaseio.com/${email}/inbox.json`
    )
      .then((res) => {
        if (res.ok) {
          res.json().then((data) => {
            console.log(data);
            let loadedData = [];
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
            let unseen = 0;
            const inboxItems = loadedData.map((inbox) => {
              if (inbox.seen === false) {
                unseen++;
              }
              return (
                <InboxItems
                  key={inbox.key}
                  id={inbox.id}
                  date={inbox.date}
                  email={inbox.email}
                  from={inbox.from}
                  seen={inbox.seen}
                  sub={inbox.sub}
                  text={inbox.text}
                  retry={setretry}
                />
              );
            });
            setUnseenMail(unseen);
            setInboxList(inboxItems);
          });
        }
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [email, retry]);

  return (
    <div className={classes.mail}>
      <div className={classes.intro}>
        <h4>Inbox</h4>
        <h4>Unread Message{unseenMail}</h4>
      </div>
      <ul>{inboxlist}</ul>
    </div>
  );
};
export default Inbox;
