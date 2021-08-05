import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Homepage from "./pages/Homepage";
import Products from "./pages/Products";
import Category from "./pages/Category";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <Router>
      {/* <AppBar /> */}
      <div className="App">
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

          <Route exact path="/Login">
            <Login />
          </Route>

          <Route exact path="/Profile">
            <Profile />
          </Route>

          <Route exact path="/Products/:id">
            <ProductDetails />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
