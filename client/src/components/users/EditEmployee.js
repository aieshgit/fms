import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import BottomBar from "../layouts/BottomBar";
import UserAuth from "../auth/UserAuth";

const EditEmployee = () => {
  let history = useHistory();
  const { id } = useParams();
  const [employee, setEmployee] = useState({
    firstName: "",
    lastName: "",
    jobTitle: "",
    licenseNum: "",
    mobileNum: "",
    email: "",
    address: "",
    city: "",
    state: "",
    postcode: "",
    startDate: "",
    endDate: "",
  });

  useEffect(() => {
    loadEmployee();
  }, []);

  const loadEmployee = async () => {
    const { data } = await Axios.get(`http://localhost:5000/employees/${id}`);
    // console.log(data);
    setEmployee(data);
  };

  const onInputChange = (event) => {
    //  console.log(event.target.value);
    setEmployee({ ...employee, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      //  console.log(vehicle);
      await Axios.put(`http://localhost:5000/employees/${id}`, employee);
      //  console.log(vehicle);
      history.push("/employees");
    } catch (err) {
      console.error(err.message);
    }
  };

  const handleCancel = () => {
    setEmployee("");
    history.push("/employees");
  };

  return (
    <UserAuth>
      <div className="table-container">
        <div className="container p-5">
          <h2 className="text-center m-4">Edit Employee</h2>
          <form onSubmit={handleSubmit}>
            <div className="row my-5">
              <div className="col-lg-3 p-3">
                <div className="mb-3">
                  <label htmlFor="firstName" className="form-label mb-0">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="form-control mt-0"
                    name="firstName"
                    value={employee.firstName}
                    onChange={onInputChange}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="lastName" className="form-label mb-0">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="form-control mt-0"
                    name="lastName"
                    value={employee.lastName}
                    onChange={onInputChange}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="jobTitle" className="form-label mb-0">
                    Job Title
                  </label>
                  <input
                    type="text"
                    className="form-control mt-0"
                    name="JobTitle"
                    value={employee.jobTitle}
                    onChange={onInputChange}
                  />
                </div>
              </div>

              <div className="col-lg-3 p-3">
                <div className="mb-3">
                  <label htmlFor="licenseNum" className="form-label mb-0">
                    License No.
                  </label>
                  <input
                    type="text"
                    className="form-control mt-0"
                    name="licenseNum"
                    value={employee.licenseNum}
                    onChange={onInputChange}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="mobileNum" className="form-label mb-0">
                    Mobile#
                  </label>
                  <input
                    type="text"
                    className="form-control mt-0"
                    name="mobileNum"
                    value={employee.mobileNum}
                    onChange={onInputChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label mb-0">
                    Email
                  </label>
                  <input
                    type="text"
                    className="form-control mt-0"
                    name="email"
                    value={employee.email}
                    onChange={onInputChange}
                  />
                </div>
              </div>

              <div className="col-lg-3 p-3">
                <div className="mb-3">
                  <label htmlFor="address" className="form-label mb-0">
                    Address
                  </label>
                  <input
                    type="text"
                    className="form-control mt-0"
                    name="address"
                    value={employee.address}
                    onChange={onInputChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="city" className="form-label mb-0">
                    City
                  </label>
                  <input
                    type="text"
                    className="form-control mt-0"
                    name="city"
                    value={employee.city}
                    onChange={onInputChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="state" className="form-label mb-0">
                    State
                  </label>
                  <input
                    type="text"
                    className="form-control mt-0"
                    name="state"
                    value={employee.state}
                    onChange={onInputChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="postcode" className="form-label mb-0">
                    Postcode
                  </label>
                  <input
                    type="text"
                    className="form-control mt-0"
                    name="postcode"
                    value={employee.postcode}
                    onChange={onInputChange}
                  />
                </div>
              </div>

              <div className="col-lg-3 p-3">
                <div className="mb-3">
                  <label htmlFor="startDate" className="form-label mb-0">
                    Start Date
                  </label>
                  <input
                    type="date"
                    className="form-control mt-0"
                    name="startDate"
                    value={employee.startDate}
                    onChange={onInputChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="endDate" className="form-label mb-0">
                    End Date
                  </label>
                  <input
                    type="date"
                    className="form-control mt-0"
                    name="endDate"
                    value={employee.endDate}
                    onChange={onInputChange}
                  />
                </div>
              </div>
            </div>
          </form>

          <BottomBar
            handleSubmit={handleSubmit}
            handleCancel={handleCancel}
            p
          />
        </div>
      </div>
    </UserAuth>
  );
};

export default EditEmployee;
