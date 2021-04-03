import { Switch, Route, BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./styles.scss";
import * as pages from "./pages";

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => <pages.FrontPage {...props} />}
        />
        <Route
          exact
          path="/designs"
          render={(props) => <pages.DesignPage {...props} />}
        />
        <Route
          exact
          path="/websites"
          render={(props) => <pages.WebsitesPage {...props} />}
        />
      </Switch>
    </BrowserRouter>
  );
}
