import { Switch, Route, BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./styles.scss";
import FrontPage from "./pages/front.page";
import InnerPage from "./pages/inner.page";

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <FrontPage />
        </Route>
        <Route path="/designs">
          <InnerPage type={"Design"} />
        </Route>
        <Route path="/websites">
          <InnerPage type={"website"} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
