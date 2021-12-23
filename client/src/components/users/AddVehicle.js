import React, { useState } from "react";
import Axios from "axios";
import { useHistory } from "react-router-dom";
import BottomBar from "../layouts/BottomBar";

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

  const onInputChange = (event) => {
    //  console.log(event.target.value);
    setVehicle({ ...vehicle, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      //  console.log(vehicle);
      await Axios.post("http://localhost:5000/vehicles", vehicle);
      //  console.log(vehicle);
      history.push("/vehicles");
    } catch (err) {
      console.error(err.message);
    }
  };

  const handleCancel = () => {
    setVehicle("");
    history.push("/vehicles");
  };

  return (
    <div className="container p-2">
      <h2 className="text-center m-4">Add Vehicle</h2>
      <form onSubmit={handleSubmit}>
        <div className="row my-5">
          <div className="col-lg-3 p-3">
            <h5 className="text-left mb-4">Information</h5>
            <hr />
            {/*             <div className="mb-3">
              <label htmlFor="vehicleNum" className="form-label mb-0">
                Vehicle#
              </label>
              <input
                type="text"
                className="form-control mt-0"
                disabled
                readOnly
                name="vehicleNum"
                value={vehicle.vehicleNum}
                onChange={onInputChange}
              />
            </div> */}

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
                name="regNum"
                value={vehicle.regNum}
                onChange={onInputChange}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="regState" className="form-label mb-0">
                State
              </label>
              {/*              <input
                type="text"
                className="form-control mt-0"
                name="regState"
                value={vehicle.regState}
                onChange={onInputChange}
              /> */}
              <select
                className="form-select"
                name="regState"
                value={vehicle.regState}
                onChange={onInputChange}
              >
                <option value="DEFAULT">Select</option>
                <option value="1">VIC</option>
                <option value="2">NSW</option>
                <option value="3">QLD</option>
                <option value="4">ACT</option>
                <option value="5">TAS</option>
                <option value="6">SA</option>
                <option value="7">WA</option>
                <option value="8">NT</option>
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
      </form>

      <BottomBar handleSubmit={handleSubmit} handleCancel={handleCancel} />
    </div>
  );
};

export default AddVehicle;
