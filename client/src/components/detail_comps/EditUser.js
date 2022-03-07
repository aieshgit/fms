/* import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

const EditUser = () => {
  let history = useHistory();
  const { id } = useParams();
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
  });

  useEffect(() => {
    loadUser();
  }, []);

  const onInputChange = (event) => {
    console.log(event.target.value);
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    await axios.put(
      `${process.env.REACT_APP_BACKEND_SERVER}/drivers/${id}`,
      user
    );
    history.push("/");
  };

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:5000/drivers/${id}`);
    //console.log(result);
    setUser(result.data);
  };

  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center">Edit A User</h2>
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
          <button type="submit" className="btn btn-warning w-100">
            Update User
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
 */
