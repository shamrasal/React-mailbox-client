import { useSelector } from "react-redux";
import { Route, Redirect, Switch } from "react-router-dom";
import ComposeMail from "./component/components/ComposeMail";
import Header from "./component/Layout/Header";
import SignIn from "./component/login/SignIn";
import SignUp from "./component/login/SignUp";
import Home from "./component/Pages/Home";

function App() {
  const isLogIn = useSelector((state) => state.Auth.isLoggedIn);
  console.log(isLogIn);
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
            <Redirect to={"/home"} />
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
        <Route path={"/home"}>
          <Home />
        </Route>
        <Route path={"/compose"}>
          <ComposeMail />
        </Route>
        <Route path={"*"}>
          <Redirect to={"/signup"} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
