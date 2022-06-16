import React, { useState } from "react";
import Axios from "axios";
import { useHistory } from "react-router-dom";
//import BottomBar from "../layouts/BottomBar";
//import Dropdown from "../layouts/Dropdown";
import UserAuth from "../auth/UserAuth";
import ErrorModal from "../layouts/ErrorModal";

const AddEmployee = () => {
  let history = useHistory();
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

  // Error modal
  const [modal, setModal] = useState({ showModal: false, error: "" });

  const handleCloseModal = () => {
    setModal({ showModal: false, error: "" });
  };

  const onInputChange = (event) => {
    //  console.log(event.target.value);
    setEmployee({ ...employee, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await Axios.post(
        `${process.env.REACT_APP_BACKEND_SERVER}/employees`,
        employee /* ,
        {
          // headers: { Authorization: `Bearer ${loginState.accessToken}` },
          headers: {
            authorization: `Bearer ${
              JSON.parse(window.localStorage.getItem("auth")).accessToken
            }`,
          },
        } */
      );

      // if data invalid show error pop up
      if (data.isDataValid === false) {
        setModal({ showModal: true, error: data.error });
      }
      // else push to list view
      else {
        history.push("/employees");
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  // uncomment if using bottom bar
  /*   const handleCancel = () => {
    setEmployee("");
    history.push("/employees");
  }; */

  return (
    <UserAuth>
      <div className="container pb-5">
        <h2 className="text-center mt-3">Add Employee</h2>
        <form onSubmit={handleSubmit}>
          <div className="row mt-3">
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
                  required
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
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="jobTitle" className="form-label mb-0">
                  Job Title
                </label>
                <input
                  type="text"
                  className="form-control mt-0"
                  name="jobTitle"
                  value={employee.jobTitle}
                  onChange={onInputChange}
                  required
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
                  required
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
                  type="number"
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
          <div className="text-center pt-5">
            <button type="submit" className="btn btn-primary w-35 py-2 px-5">
              Save
            </button>
          </div>
        </form>

        {/*           <BottomBar
            handleSubmit={handleSubmit}
            handleCancel={handleCancel}
            p
          /> */}
        <ErrorModal
          show={modal.showModal}
          error={modal.error}
          handleCloseModal={handleCloseModal}
        />
      </div>
    </UserAuth>
  );
};

export default AddEmployee;
