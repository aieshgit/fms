import React from "react";
import UserAuth from "../auth/UserAuth";

const Dashboard = () => {
  return (
    <UserAuth>
      <>
        <h1 className="dashboard">Welcome to FleetBuddy.</h1>
        <h5 className="dashboard">
          Please use links available in the Navbar to access the application
        </h5>
      </>
    </UserAuth>
  );
};

export default Dashboard;
