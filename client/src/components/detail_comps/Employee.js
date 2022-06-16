import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Link, /* useHistory, */ useParams } from "react-router-dom";
//import BottomBar from "../layouts/BottomBar";
import UserAuth from "../auth/UserAuth";

const Employee = () => {
  // let history = useHistory();
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
    const { data } = await Axios.get(
      `${process.env.REACT_APP_BACKEND_SERVER}/employees/${id}`
    );
    // console.log(data);
    setEmployee(data);
  };

  return (
    <UserAuth>
      {/* <div className="table-container"> */}
      <div className="container">
        {/*         <Link className="btn btn-primary px-5" to="/employees">
          Back
        </Link> */}
        <h2 className="text-center mt-3">Employee</h2>
        <form>
          <div className="row mt-3 mb-5">
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
                  disabled
                  readOnly
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
                  disabled
                  readOnly
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
                  disabled
                  readOnly
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
                  disabled
                  readOnly
                />
              </div>

              <div className="mb-3">
                <label htmlFor="mobileNum" className="form-label mb-0">
                  Mobile#
                </label>
                <input
                  type="number"
                  className="form-control mt-0"
                  name="mobileNum"
                  value={employee.mobileNum}
                  disabled
                  readOnly
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
                  disabled
                  readOnly
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
                  disabled
                  readOnly
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
                  disabled
                  readOnly
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
                  disabled
                  readOnly
                />
              </div>
              <div className="mb-3">
                <label htmlFor="postcode" className="form-label mb-0">
                  Postcode
                </label>
                <input
                  type="number"
                  className="form-control mt-0"
                  name="postcode"
                  value={employee.postcode}
                  disabled
                  readOnly
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
                  disabled
                  readOnly
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
                  disabled
                  readOnly
                />
              </div>
            </div>
          </div>
        </form>
      </div>
      {/*</div>*/}
    </UserAuth>
  );
};

export default Employee;
