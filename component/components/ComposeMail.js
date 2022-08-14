import { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "./ComposeMail.css";
import swal from "sweetalert";

import classes from "./ComposeMail.module.css";
import { Sentactions } from "../Store/Sent";
const ComposeMail = () => {
  const dispatch = useDispatch();
  const sent = useSelector((state) => state.Sent.items);
  const email = useSelector((state) => state.Auth.email);
  const enteredEmailRef = useRef();
  const enteredSubRef = useRef();
  console.log(sent);

  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  const handleEditorChange = (state) => {
    setEditorState(state);
    // return input.onChange(
    //   draftToHtml(convertToRaw(editorState.getCurrentContent()))
    // );
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredEmail = enteredEmailRef.current.value;
    const enteredSub = enteredSubRef.current.value;
    const to = enteredEmail.replace(/[^a-zA-Z ]/g, "");
    const item = editorState.getCurrentContent().getPlainText();
    console.log(item);
    // const email = localStorage.getItem("email");

    const input = {
      email: enteredEmail,
      sub: enteredSub,
      from: email,
      text: item,
      date: new Date().toString(),
      seen: false,
    };
    fetch(
      `https://email-box-client-default-rtdb.firebaseio.com/${to}/inbox.json`,
      {
        method: "POST",
        body: JSON.stringify(input),
      }
    )
      .then((res) => {
        if (res.ok) {
          swal("Mail Sent!", "Your email sent successfully!", "success");
          dispatch(Sentactions.addsent(input));
          fetch(
            `https://email-box-client-default-rtdb.firebaseio.com/${email}/sent.json`,
            {
              method: "POST",
              body: JSON.stringify(input),
            }
          )
            .then((res) => {
              console.log(res);
            })
            .catch((err) => {
              console.log(err);
            });
        }
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    console.log(input);
  };
  return (
    <div className={classes.mail}>
      <form onSubmit={submitHandler} className={classes.form}>
        <div className={classes.intro}>
          <h4> New EMail</h4>
        </div>
        <div className={classes.to}>
          <label>To</label>
          <input type='email' id='mailid' ref={enteredEmailRef} required />
        </div>
        <div className={classes.to}>
          <label>Subject</label>
          <input ref={enteredSubRef} type='text'></input>
        </div>
        <div className={classes.text}>
          <Editor
            defaultEditorState={editorState}
            onEditorStateChange={handleEditorChange}
            wrapperClassName='wrapper-class'
            editorClassName='editor-class'
            toolbarClassName='toolbar-class'
          />
        </div>
        <div className={classes.to}>
          <button className={classes.button}>Send Mail</button>
        </div>
      </form>
    </div>
  );
};
export default ComposeMail;
