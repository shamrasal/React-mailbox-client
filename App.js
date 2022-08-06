import { Route, Redirect, Switch } from "react-router-dom";
import SignIn from "./component/login/SignIn";
import SignUp from "./component/login/SignUp";
import Home from "./component/Pages/Home";

function App() {
  return (
    <div>
      <Switch>
        <Route path={"/"} exact>
          <Redirect to={"/signup"} />
        </Route>
        <Route path={"/signup"}>
          <SignUp />
        </Route>
        <Route path={"/signin"}>
          <SignIn />
        </Route>
        <Route path={"/home"}>
          <Home />
        </Route>
        <Route path={"*"}>
          <Redirect to={"/signup"} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
