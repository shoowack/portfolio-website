import { Switch, Route, BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./styles.scss";
import * as pages from "./pages";

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={pages.FrontPage} />
        <Route exact path="/designs" component={pages.DesignPage} />
        <Route exact path="/websites" component={pages.WebsitesPage} />
      </Switch>
    </BrowserRouter>
  );
}
