import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useHistory, useParams } from "react-router-dom";
//import BottomBar from "../layouts/BottomBar";
import UserAuth from "../auth/UserAuth";
import ErrorModal from "../layouts/ErrorModal";
import Dropdown from "../layouts/Dropdown";

const EditFuel = () => {
  let history = useHistory();
  const { id } = useParams();
  const [fuel, setFuel] = useState({
    vehicleNum: "",
    vehicleDbId: "",
    fuelDate: "",
    fuelQty: "",
    totalFuelCost: "",
    mileage: "",
    fuelDbId: "",
  });

  useEffect(() => {
    loadFuel();
  }, []);

  const loadFuel = async () => {
    const result = await Axios.get(
      `${process.env.REACT_APP_BACKEND_SERVER}/fuel/${id}`
    );
    //  console.log(result.data);
    setFuel(result.data);
  };

  // dropdown current value

  // Error modal
  const [modal, setModal] = useState({ showModal: false, error: "" });

  const handleCloseModal = () => {
    setModal({ showModal: false, error: "" });
  };

  const onInputChange = (event) => {
    //  console.log(event.target.value);
    if (event.target.name === "vehicleNum") {
      setFuel({
        ...fuel,
        [event.target.name]: event.target.value,
        vehicleDbId: event.target.selectedOptions[0].getAttribute("dbid"),
      });
    } else {
      setFuel({ ...fuel, [event.target.name]: event.target.value });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      //  console.log(vehicle);
      const { data } = await Axios.put(
        `${process.env.REACT_APP_BACKEND_SERVER}/fuel/${id}`,
        fuel
      );

      // if data invalid show error pop up
      if (data.isDataValid === false) {
        setModal({ showModal: true, error: data.error });
      }
      // else push to list view
      else {
        history.push("/fuel");
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  // uncomment if using bottom bar
  /*   const handleCancel = () => {
    setFuel("");
    history.push("/fuel-list");
  }; */

  return (
    <UserAuth>
      <div className="container p-5">
        <h2 className="text-center m-4">Edit Fuel</h2>
        <form onSubmit={handleSubmit}>
          <div className="row my-5">
            <div className="col-lg-3 p-3">
              <div className="mb-3">
                <label htmlFor="vehicleNum" className="form-label mb-0">
                  Vehicle#
                </label>
                <select
                  type="text"
                  className="form-select mt-0"
                  name="vehicleNum"
                  value={fuel.vehicleNum}
                  onChange={onInputChange}
                  required
                >
                  <Dropdown
                    dropDownObject="vehicles"
                    dropDownKey1="vehicleNum"
                    dropDownKey2="regNum"
                    //   currentValue={fuel.vehicleNum + "[" + fuel.regNum + "]"}
                    currentValue={fuel.vehicleNum}
                  />
                </select>
              </div>
            </div>

            <div className="col-lg-3 p-3">
              <div className="mb-3">
                <label htmlFor="fuelDate" className="form-label mb-0">
                  Date
                </label>
                <input
                  type="date"
                  className="form-control mt-0"
                  name="fuelDate"
                  value={fuel.fuelDate}
                  onChange={onInputChange}
                />
              </div>
            </div>

            <div className="col-lg-3 p-3">
              <div className="mb-3">
                <label htmlFor="fuelQty" className="form-label mb-0">
                  Quantity (ltr.)
                </label>
                <input
                  type="number"
                  className="form-control mt-0"
                  name="fuelQty"
                  value={fuel.fuelQty}
                  onChange={onInputChange}
                />
              </div>
            </div>

            <div className="col-lg-3 p-3">
              <div className="mb-3">
                <label htmlFor="totalFuelCost" className="form-label mb-0">
                  Total Cost ($)
                </label>
                <input
                  type="number"
                  className="form-control mt-0"
                  name="totalFuelCost"
                  value={fuel.totalFuelCost}
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

export default EditFuel;
