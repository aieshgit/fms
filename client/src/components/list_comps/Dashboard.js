import React from "react";
import UserAuth from "../auth/UserAuth";

const Dashboard = () => {
  return (
    <UserAuth>
      <div>
        <h1 className="dashboard">Welcome to FleetBuddy.</h1>
        <h1>
          Please use links available in the Navbar to access the application
        </h1>
      </div>
    </UserAuth>
  );
};

export default Dashboard;
