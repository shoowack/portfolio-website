import { Switch, Route, BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./styles.scss";
import * as pages from "./pages";

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={() => <pages.FrontPage />} />
        <Route exact path="/designs" render={() => <pages.DesignPage />} />
        <Route exact path="/websites" render={() => <pages.WebsitesPage />} />
      </Switch>
    </BrowserRouter>
  );
}
