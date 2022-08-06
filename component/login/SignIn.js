import React, { useRef } from "react";
import { Link, useHistory } from "react-router-dom";
import classes from "./SignIn.module.css";
const SignIn = () => {
  const history = useHistory();
  const enteredEmailRef = useRef();
  const enteredPasswordRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredEmail = enteredEmailRef.current.value;
    const enteredPassword = enteredPasswordRef.current.value;

    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAsRF3UsCeuJuSJzmWw5-xvKVUiR1QOWd0",
      {
        method: "POST",
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true,
        }),
      }
    )
      .then((res) => {
        if (res.ok) {
          console.log("ok");
          history.replace("/home");
        } else {
          res.json().then((data) => {
            console.log(data);
            let errorMessage = "something went wrong";
            if (data && data.error && data.error.message) {
              errorMessage = data.error.message;
            }
            alert(errorMessage);
          });
          console.log("not ok");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <section className={classes.auth}>
      <h1>{"Log In"}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label>Email</label>
          <input type='email' id='loginemail' ref={enteredEmailRef} required />
        </div>
        <div className={classes.control}>
          <label>Password</label>
          <input
            type='password'
            id='loginpassword'
            ref={enteredPasswordRef}
            required
          />
        </div>
        <div className={classes.actions}>{<button>{"Log In"}</button>}</div>
        <div className={classes.actions1}>
          <Link to={"/signup"}>Dont have a account? Sign Up</Link>
        </div>
      </form>
    </section>
  );
};
export default SignIn;
