import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
//import Home from "./components/pages/Home";
import Vehicles from "./components/list_comps/Vehicles";
import AddVehicle from "./components/detail_comps/AddVehicle";
import EditVehicle from "./components/detail_comps/EditVehicle";
import Vehicle from "./components/detail_comps/Vehicle";
import Services from "./components/list_comps/Services";
import AddService from "./components/detail_comps/AddService";
import Service from "./components/detail_comps/Service";
import EditService from "./components/detail_comps/EditService";
import OdoReadings from "./components/list_comps/OdoReadings";
import AddOdoReading from "./components/detail_comps/AddOdoReading";
import EditOdoReading from "./components/detail_comps/EditOdoReading";
import OdoReading from "./components/detail_comps/OdoReading";
//import About from "./components/pages/About";
//import Contact from "./components/pages/Contact";
import Navbar from "./components/layouts/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NotFound from "./components/list_comps/NotFound";
import Dashboard from "./components/list_comps/Dashboard";
//import AddUser from "./components/users/AddUser";
//import EditUser from "./components/users/EditUser";
//import User from "./components/users/User";
import Login from "./components/list_comps/Login";
import { LoginProvider } from "./components/context/Context";
import Employees from "./components/list_comps/Employees";
import Employee from "./components/detail_comps/Employee";
import AddEmployee from "./components/detail_comps/AddEmployee";
import EditEmployee from "./components/detail_comps/EditEmployee";
import FuelList from "./components/list_comps/FuelList";
import AddFuel from "./components/detail_comps/AddFuel";
import EditFuel from "./components/detail_comps/EditFuel";
import Fuel from "./components/detail_comps/Fuel";

function App() {
  return (
    <LoginProvider>
      <Router>
        <div className="App">
          {/* window.location.pathname !== "/login" && <Navbar /> */}
          <Navbar />
          <Switch>
            <Route exact path="/login" component={Login} />
            {/* <Route exact path="/" component={Home} /> */}
            <Route exact path="/" component={Login} />
            {/* <Route exact path="/dashboard" component={Home} /> */}
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/vehicles" component={Vehicles} />
            <Route exact path="/vehicles/add" component={AddVehicle} />
            <Route exact path="/vehicles/edit/:id" component={EditVehicle} />
            <Route exact path="/vehicles/:id" component={Vehicle} />
            <Route exact path="/services" component={Services} />
            <Route exact path="/services/add" component={AddService} />
            <Route exact path="/services/:id" component={Service} />
            <Route exact path="/services/edit/:id" component={EditService} />
            <Route exact path="/odoReadings" component={OdoReadings} />
            <Route exact path="/odoReadings/add" component={AddOdoReading} />
            <Route exact path="/odoReadings/:id" component={OdoReading} />
            <Route
              exact
              path="/odoReadings/edit/:id"
              component={EditOdoReading}
            />
            <Route exact path="/employees" component={Employees} />
            <Route exact path="/employees/add" component={AddEmployee} />
            <Route exact path="/employees/:id" component={Employee} />
            <Route exact path="/employees/edit/:id" component={EditEmployee} />
            <Route exact path="/fuel" component={FuelList} />
            <Route exact path="/fuel/add" component={AddFuel} />
            <Route exact path="/fuel/:id" component={Fuel} />
            <Route exact path="/fuel/edit/:id" component={EditFuel} />
            {/*             <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/users/add" component={AddUser} />

            <Route exact path="/users/edit/:id" component={EditUser} />
            <Route exact path="/users/:id" component={User} /> */}
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    </LoginProvider>
  );
}

export default App;
