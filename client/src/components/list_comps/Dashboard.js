import React from "react";
import UserAuth from "../auth/UserAuth";

const Dashboard = () => {
  return (
    <UserAuth>
      <>
        <h1 className="dashboard">Welcome to FleetBuddy.</h1>
      </>
    </UserAuth>
  );
};

export default Dashboard;
