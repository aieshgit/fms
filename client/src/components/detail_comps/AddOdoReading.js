import React, { useState } from "react";
import Axios from "axios";
import { useHistory } from "react-router-dom";
//import BottomBar from "../layouts/BottomBar";
import Dropdown from "../layouts/Dropdown";
import UserAuth from "../auth/UserAuth";
import ErrorModal from "../layouts/ErrorModal";

const AddOdoReading = () => {
  let history = useHistory();
  const [odoReading, setOdoReading] = useState({
    vehicleNum: "",
    readingDate: "",
    initialReading: "",
    finalReading: "",
    mileage: "",
  });

  // Error modal
  const [modal, setModal] = useState({ showModal: false, error: "" });

  const handleCloseModal = () => {
    setModal({ showModal: false, error: "" });
  };

  const onInputChange = (event) => {
    // console.log(event.target.value)

    if (event.target.name === "vehicleNum") {
      setOdoReading({
        ...odoReading,
        [event.target.name]: event.target.value,
        vehicleDbId: event.target.selectedOptions[0].getAttribute("dbid"),
      });
    } else if (event.target.name === "initialReading") {
      setOdoReading({
        ...odoReading,
        [event.target.name]: event.target.value,
        mileage: odoReading.finalReading - event.target.value,
      });
    } else if (event.target.name === "finalReading") {
      setOdoReading({
        ...odoReading,
        [event.target.name]: event.target.value,
        mileage: event.target.value - odoReading.initialReading,
      });
    } else {
      setOdoReading({ ...odoReading, [event.target.name]: event.target.value });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      //console.log(odoReading);
      const { data } = await Axios.post(
        `${process.env.REACT_APP_BACKEND_SERVER}/odoReadings`,
        odoReading
      );

      // if data invalid show error pop up
      if (data.isDataValid === false) {
        setModal({ showModal: true, error: data.error });
      }
      // else push to list view
      else {
        history.push("/odoReadings");
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  // uncomment this if using bottom bar
  /*   const handleCancel = () => {
    setOdoReading("");
    history.push("/odoReadings");
  }; */

  return (
    <UserAuth>
      <div className="container pb-5">
        <h2 className="text-center mt-3">Add Odometer Reading</h2>
        <form onSubmit={handleSubmit}>
          <div className="row mt-3">
            <div className="col-lg-3 p-3">
              <div className="mb-3">
                <label htmlFor="vehicleNum" className="form-label mb-0">
                  Vehicle#
                </label>
                <select
                  type="text"
                  className="form-select mt-0"
                  name="vehicleNum"
                  value={odoReading.vehicleNum}
                  onChange={onInputChange}
                  required
                >
                  <Dropdown
                    dropDownObject="vehicles"
                    dropDownKey1="vehicleNum"
                    dropDownKey2="regNum"
                    currentValue=""
                  />
                </select>
              </div>

              <div className="mb-3">
                <label htmlFor="readingDate" className="form-label mb-0">
                  Reading Date
                </label>
                <input
                  type="date"
                  className="form-control mt-0"
                  name="readingDate"
                  value={odoReading.readingDate}
                  onChange={onInputChange}
                  required
                />
              </div>
            </div>

            <div className="col-lg-3 p-3">
              <div className="mb-3">
                <label htmlFor="initialReading" className="form-label mb-0">
                  Initial Reading
                </label>
                <input
                  type="number"
                  className="form-control mt-0"
                  name="initialReading"
                  value={odoReading.initialReading}
                  onChange={onInputChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="finalReading" className="form-label mb-0">
                  Final Reading
                </label>
                <input
                  type="number"
                  className="form-control mt-0"
                  name="finalReading"
                  value={odoReading.finalReading}
                  onChange={onInputChange}
                  required
                />
              </div>
            </div>

            <div className="col-lg-3 p-3">
              <div className="mb-3">
                <label htmlFor="mileage" className="form-label mb-0">
                  Mileage
                </label>
                <input
                  type="number"
                  className="form-control mt-0"
                  name="mileage"
                  //  value={odoReading.mileage}
                  value={odoReading.mileage}
                  // onChange={onInputChange}
                  disabled
                  readOnly
                />
              </div>
            </div>

            <div className="col-lg-3 p-3">
              <div className="mb-3">
                <label htmlFor="SpareField" className="form-label mb-0">
                  Spare Field
                </label>
                <input
                  type="text"
                  className="form-control mt-0"
                  name="SpareField"
                  //  value={odoReading.mileage}
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

        {/* <BottomBar handleSubmit={handleSubmit} handleCancel={handleCancel} p /> */}
        <ErrorModal
          show={modal.showModal}
          error={modal.error}
          handleCloseModal={handleCloseModal}
        />
      </div>
    </UserAuth>
  );
};

export default AddOdoReading;
