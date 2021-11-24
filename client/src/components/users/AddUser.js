import React, { useState } from "react";
import Axios from "axios";
import { useHistory } from "react-router-dom";

const AddUser = () => {
  let history = useHistory();
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
  });

  const onInputChange = (event) => {
    console.log(event.target.value);
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      // console.log(user);
      await Axios.post("http://localhost:5000/drivers", user);
      history.push("/");
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center">Add A User</h2>
        <form onSubmit={onSubmit}>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter Your Name"
              name="name"
              value={user.name}
              onChange={onInputChange}
            />
            <label htmlFor="name">Enter Your Name</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="username"
              placeholder="Enter Your User Name"
              name="username"
              value={user.username}
              onChange={onInputChange}
            />
            <label htmlFor="username">Enter Your User Name</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter Your E-mail Address"
              name="email"
              value={user.email}
              onChange={onInputChange}
            />
            <label htmlFor="email">Enter Your E-mail Address</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="phone"
              placeholder="Enter Your Phone Number"
              name="phone"
              value={user.phone}
              onChange={onInputChange}
            />
            <label htmlFor="phone">Enter Your Phone Number</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="website"
              placeholder="Enter Your Website"
              name="website"
              value={user.website}
              onChange={onInputChange}
            />
            <label htmlFor="website">Enter Your Website</label>
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Add User
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
