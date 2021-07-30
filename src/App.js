import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Homepage from "./pages/Homepage";
import Orders from "./pages/Orders";
import Products from "./pages/Products";
import Category from "./pages/Category";
import SiteHeader from "./components/SiteHeader";
import Topbar from "./components/TopBar";

function App() {
  return (
    <Router>
      <div className="App">
        <Topbar />

        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>

          <Route exact path="/Products">
            <Products />
          </Route>

          <Route path="/Categories">
            <Category />
          </Route>

          <Route path="/Orders">
            <Orders />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
