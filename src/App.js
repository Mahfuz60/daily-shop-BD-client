import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Header from "./Components/Header/Header";
import Login from "./Components/Login/Login";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import CheckOut from "./Components/CheckOut/CheckOut";
import AddProduct from "./Components/AddProduct/AddProduct";
export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      
      <Router>
        <Header />
        <Switch>
          <Route exact path="/home">
            <Home />
          </Route>

          <PrivateRoute path="/addProduct">
            <AddProduct />
          </PrivateRoute>
          <PrivateRoute path="/checkOut/:productType">
            <CheckOut />
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
