import React, { useState } from "react";
import Axios from "axios";
import { useHistory } from "react-router-dom";
// import BottomBar from "../layouts/BottomBar";
import UserAuth from "../auth/UserAuth";
import ErrorModal from "../layouts/ErrorModal";

const AddVehicle = () => {
  let history = useHistory();
  const [vehicle, setVehicle] = useState({
    //  vehicleNum: "",
    regNum: "",
    vin: "",
    make: "",
    model: "",
    buildDate: "",
    vehicleType: "",
    etag: "",
    gcm: "",
    gvm: "",
    tare: "",
    maintEntry: "",
    maintExit: "",
    massEntry: "",
    massExit: "",
    nhvasLabelNum: "",
    frequency: "",
    regDueDate: "",
    regState: "",
    engineNum: "",
    engineMake: "",
    engineModel: "",
    engineCapacity: "",
    engineGearBox: "",
  });

  /* Use the below if using custom validation rules for each field using states   
//form validation variables and rules
  const [isRegValid, setIsRegValid] = useState(true);

  //Input Field validation css
  const invalidInputCss = isRegValid
    ? "form-control mt-0"
    : "form-control border-danger bg-warning mt-0"; */

  // Error modal
  const [modal, setModal] = useState({ showModal: false, error: "" });

  const handleCloseModal = () => {
    setModal({ showModal: false, error: "" });
  };

  // handle input values
  const onInputChange = (event) => {
    //  console.log(event.target.value);
    setVehicle({ ...vehicle, [event.target.name]: event.target.value });
  };

  // handle submit
  const handleSubmit = async (event) => {
    event.preventDefault();

    /* Use the below if using custom validation rules for each field using states 
    // field validation
    if (vehicle.regNum.trim() === "") {
      setIsRegValid(false);
      return;
    } */

    try {
      //  console.log(vehicle);
      const { data } = await Axios.post(
        `${process.env.REACT_APP_BACKEND_SERVER}/vehicles`,
        vehicle
      );

      // if data invalid show error pop up
      if (data.isDataValid === false) {
        setModal({ showModal: true, error: data.error });
      }
      // else push to list view
      else {
        history.push("/vehicles");
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  // uncomment this if using bottom bar
  /*   const handleCancel = () => {
    setVehicle("");
    history.push("/vehicles");
  }; */

  return (
    <UserAuth>
      <div className="container pb-5">
        <h2 className="text-center mt-3">Add Vehicle</h2>
        {/*
Use the below if using custom validation rules for each field using states          {!isRegValid && (
          <p className="text-danger">**Registration# cannot be blank**</p>
        )} */}
        <form onSubmit={handleSubmit}>
          <div className="row mt-3">
            <div className="col-lg-3 p-3">
              <h5 className="text-left mb-4">Information</h5>
              <hr />
              <div className="mb-3">
                <label htmlFor="make" className="form-label mb-0">
                  Make
                </label>
                <input
                  type="text"
                  className="form-control mt-0"
                  name="make"
                  value={vehicle.make}
                  onChange={onInputChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="model" className="form-label mb-0">
                  Model
                </label>
                <input
                  type="text"
                  className="form-control mt-0"
                  name="model"
                  value={vehicle.model}
                  onChange={onInputChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="vin" className="form-label mb-0">
                  Vin/Chasis
                </label>
                <input
                  type="text"
                  className="form-control mt-0"
                  name="vin"
                  value={vehicle.vin}
                  onChange={onInputChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="vehicleType" className="form-label mb-0">
                  Vehicle Type
                </label>
                <input
                  type="text"
                  className="form-control mt-0"
                  name="vehicleType"
                  value={vehicle.vehicleType}
                  onChange={onInputChange}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="buildDate" className="form-label mb-0">
                  Build Date
                </label>
                <input
                  type="date"
                  className="form-control mt-0"
                  name="buildDate"
                  value={vehicle.buildDate}
                  onChange={onInputChange}
                />
              </div>
            </div>

            <div className="col-lg-3 p-3">
              <h5 className="text-left mb-4">Registration</h5>
              <hr />
              <div className="mb-3">
                <label htmlFor="regNum" className="form-label mb-0">
                  Registration#
                </label>
                <input
                  type="text"
                  className="form-control mt-0"
                  //  className={invalidInputCss}
                  name="regNum"
                  value={vehicle.regNum}
                  onChange={onInputChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="regState" className="form-label mb-0">
                  State
                </label>
                <select
                  className="form-select"
                  name="regState"
                  value={vehicle.regState}
                  onChange={onInputChange}
                >
                  <option value="">Select</option>
                  <option value="VIC">VIC</option>
                  <option value="NSW">NSW</option>
                  <option value="QLD">QLD</option>
                  <option value="ACT">ACT</option>
                  <option value="TAS">TAS</option>
                  <option value="SA">SA</option>
                  <option value="WA">WA</option>
                  <option value="NT">NT</option>
                </select>
              </div>

              <div className="mb-3">
                <label htmlFor="regDueDate" className="form-label mb-0">
                  Due Date
                </label>
                <input
                  type="date"
                  className="form-control mt-0"
                  name="regDueDate"
                  value={vehicle.regDueDate}
                  onChange={onInputChange}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="frequency" className="form-label mb-0">
                  Frequency
                </label>
                <input
                  type="text"
                  className="form-control mt-0"
                  name="frequency"
                  value={vehicle.frequency}
                  onChange={onInputChange}
                />
              </div>
            </div>

            <div className="col-lg-3 p-3">
              <h5 className="text-left mb-4">Engine</h5>
              <hr />
              <div className="mb-3">
                <label htmlFor="engineNum" className="form-label mb-0">
                  Engine#
                </label>
                <input
                  type="text"
                  className="form-control mt-0"
                  name="engineNum"
                  value={vehicle.engineNum}
                  onChange={onInputChange}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="engineMake" className="form-label mb-0">
                  Make
                </label>
                <input
                  type="text"
                  className="form-control mt-0"
                  name="engineMake"
                  value={vehicle.engineMake}
                  onChange={onInputChange}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="engineModel" className="form-label mb-0">
                  Model
                </label>
                <input
                  type="text"
                  className="form-control mt-0"
                  name="engineModel"
                  value={vehicle.engineModel}
                  onChange={onInputChange}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="engineCapacity" className="form-label mb-0">
                  Capacity
                </label>
                <input
                  type="text"
                  className="form-control mt-0"
                  name="engineCapacity"
                  value={vehicle.engineCapacity}
                  onChange={onInputChange}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="engineGearBox" className="form-label mb-0">
                  Gearbox
                </label>
                <input
                  type="text"
                  className="form-control mt-0"
                  name="engineGearBox"
                  value={vehicle.engineGearBox}
                  onChange={onInputChange}
                />
              </div>
            </div>

            <div className="col-lg-3 p-3">
              <h5 className="text-left mb-4">Other</h5>
              <hr />
              <div className="mb-3">
                <label htmlFor="etag" className="form-label mb-0">
                  ETAG
                </label>
                <input
                  type="text"
                  className="form-control mt-0"
                  name="etag"
                  value={vehicle.etag}
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

        {/* <BottomBar handleSubmit={handleSubmit} handleCancel={handleCancel} /> */}

        <ErrorModal
          show={modal.showModal}
          error={modal.error}
          handleCloseModal={handleCloseModal}
        />
      </div>
    </UserAuth>
  );
};

export default AddVehicle;
