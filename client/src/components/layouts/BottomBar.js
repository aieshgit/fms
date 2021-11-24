import React from "react";

const BottomBar = (props) => {
  return (
    <nav className="navbar fixed-bottom navbar-dark bg-dark">
      <div className="container-fluid">
        <button
          className="btn btn-danger px-5"
          onClick={(e) => props.handleCancel(e)}
        >
          Cancel
        </button>
        <button
          type="submit"
          className="btn btn-success px-5"
          onClick={(e) => props.handleSubmit(e)}
        >
          Save
        </button>
      </div>
    </nav>
  );
};
export default BottomBar;
