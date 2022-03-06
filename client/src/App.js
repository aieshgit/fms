import React, { useContext } from "react";
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
import OdoReadings from "./components/pages/OdoReadings";
import AddOdoReading from "./components/users/AddOdoReading";
import EditOdoReading from "./components/users/EditOdoReading";
import OdoReading from "./components/users/OdoReading";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Navbar from "./components/layouts/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NotFound from "./components/pages/NotFound";
import AddUser from "./components/users/AddUser";
import EditUser from "./components/users/EditUser";
import User from "./components/users/User";
import Login from "./components/pages/Login";
//import NewDocumentContext from "./components/context/NewDocumentContext";
import { LoginProvider } from "./components/context/Context";
import Employees from "./components/pages/Employees";
import Employee from "./components/users/Employee";
import AddEmployee from "./components/users/AddEmployee";
import EditEmployee from "./components/users/EditEmployee";
import Dashboard from "./components/pages/Dashboard";

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
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/users/add" component={AddUser} />

            <Route exact path="/users/edit/:id" component={EditUser} />
            <Route exact path="/users/:id" component={User} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    </LoginProvider>
  );
}

export default App;
