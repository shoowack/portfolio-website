import { Switch, Route, BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./styles.scss";
import * as pages from "./pages";

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={pages.FrontPage} />
        <Route path="/designs" component={pages.DesignPage} />
        <Route path="/websites" component={pages.WebsitesPage} />
      </Switch>
    </BrowserRouter>
  );
}
