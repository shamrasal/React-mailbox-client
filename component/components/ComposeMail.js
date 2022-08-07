import { useState, useRef } from "react";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "./ComposeMail.css";

import classes from "./ComposeMail.module.css";
const ComposeMail = () => {
  const enteredEmailRef = useRef();
  const enteredSubRef = useRef();

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

    const item = convertToRaw(editorState.getCurrentContent());
    const text = item.blocks[0].text;

    const input = {
      email: enteredEmail,
      sub: enteredSub,
      text: text,
    };

    fetch(
      "https://email-box-client-default-rtdb.firebaseio.com/emailsent.json",
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
