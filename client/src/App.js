import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./components/pages/Home";
import Vehicles from "./components/pages/Vehicles";
import AddVehicle from "./components/users/AddVehicle";
import EditVehicle from "./components/users/EditVehicle";
import Vehicle from "./components/users/Vehicle";
import Services from "./components/pages/Services";
import AddService from "./components/users/AddService";
import Service from "./components/users/Service";
import EditService from "./components/users/EditService";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Navbar from "./components/layouts/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NotFound from "./components/pages/NotFound";
import AddUser from "./components/users/AddUser";
import EditUser from "./components/users/EditUser";
import User from "./components/users/User";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/vehicles" component={Vehicles} />
          <Route exact path="/vehicles/add" component={AddVehicle} />
          <Route exact path="/vehicles/edit/:id" component={EditVehicle} />
          <Route exact path="/vehicles/:id" component={Vehicle} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/services/add" component={AddService} />
          <Route exact path="/services/:id" component={Service} />
          <Route exact path="/services/edit/:id" component={EditService} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/users/add" component={AddUser} />

          <Route exact path="/users/edit/:id" component={EditUser} />
          <Route exact path="/users/:id" component={User} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
