import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { HOME_URL, DASHBOARD_URL } from "./constants/routes";

// Pages!
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";

// Styles
import "./sass/main.scss";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={DASHBOARD_URL}>
          <Dashboard />
        </Route>
        <Route path={HOME_URL}>
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
