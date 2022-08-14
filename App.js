import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect, Switch } from "react-router-dom";
import ComposeMail from "./component/components/ComposeMail";
import Header from "./component/Layout/Header";
import SignIn from "./component/login/SignIn";
import SignUp from "./component/login/SignUp";
import Inbox from "./component/components/Inbox";
import Sent from "./component/components/Sent";
import InboxDetails from "./component/components/inboxDetails";
import SentDetails from "./component/components/SentDetails";

// let isInitial = true;

function App() {
  // const dispatch = useDispatch();
  const isLogIn = useSelector((state) => state.Auth.isLoggedIn);
  // const email = useSelector((state) => state.Auth.email);
  // const sent = useSelector((state) => state.Sent);

  // useEffect(() => {
  //   // const sendData = async () => {
  //   //   const response = await fetch(
  //   //     `https://email-box-client-default-rtdb.firebaseio.com/${email}/sent.json`,
  //   //     {
  //   //       method: "PUT",
  //   //       body: JSON.stringify(sent),
  //   //     }
  //   //   );

  //   //   if (!response.ok) {
  //   //     throw new Error("something went wrong");
  //   //   }
  //   //   const responseData = await response.json();
  //   //   console.log(responseData);
  //   // };
  //   if (isInitial) {
  //     const getCartData = async () => {
  //       const response = await fetch(
  //         `https://email-box-client-default-rtdb.firebaseio.com/${email}/sent.json`,
  //         {
  //           method: "GET",
  //         }
  //       );

  //       if (!response.ok) {
  //         throw new Error("something went wrong...!");
  //       }

  //       const responseData = await response.json();
  //       console.log(responseData);

  //       dispatch(
  //         Sentactions.replace({
  //           items: responseData.items || [],
  //           updateSent: responseData.updateSent || false,
  //         })
  //       );
  //     };
  //     getCartData().catch((err) => {
  //       console.log(err);
  //     });
  //     isInitial = false;
  //     return;
  //   }
  //   // if (sent.updateSent) {
  //   //   sendData().catch((err) => {
  //   //     console.log(err);
  //   //   });
  //   // }
  // }, [sent, email, dispatch]);

  return (
    <div>
      {isLogIn && <Header />}
      <Switch>
        {!isLogIn && (
          <Route path={"/"} exact>
            <Redirect to={"/signup"} />
          </Route>
        )}
        {isLogIn && (
          <Route path={"/"} exact>
            <Redirect to={"/inbox"} />
          </Route>
        )}
        {!isLogIn && (
          <Route path={"/signup"}>
            <SignUp />
          </Route>
        )}
        {!isLogIn && (
          <Route path={"/signin"}>
            <SignIn />
          </Route>
        )}
        {isLogIn && (
          <Route path={"/inbox"} exact>
            <Inbox />
          </Route>
        )}
        {isLogIn && (
          <Route path={"/sent"} exact>
            <Sent />
          </Route>
        )}
        {isLogIn && (
          <Route path='/inbox/:productId'>
            <InboxDetails />
          </Route>
        )}
        {isLogIn && (
          <Route path='/sent/:productId'>
            <SentDetails />
          </Route>
        )}
        {isLogIn && (
          <Route path={"/compose"}>
            <ComposeMail />
          </Route>
        )}
        {!isLogIn && (
          <Route path={"*"}>
            <Redirect to={"/signup"} />
          </Route>
        )}
        {isLogIn && (
          <Route path={"*"}>
            <Redirect to={"/inbox"} />
          </Route>
        )}
      </Switch>
    </div>
  );
}

export default App;
