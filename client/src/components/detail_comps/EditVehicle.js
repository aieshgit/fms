import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import BottomBar from "../layouts/BottomBar";
import UserAuth from "../auth/UserAuth";

const EditVehicle = () => {
  let history = useHistory();
  const { id } = useParams();
  const [vehicle, setVehicle] = useState({
    vehicleNum: "",
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

  useEffect(() => {
    loadVehicle();
  }, []);

  const loadVehicle = async () => {
    const result = await Axios.get(
      `${process.env.REACT_APP_BACKEND_SERVER}/vehicles/${id}`
    );
    // console.log(result.data);
    setVehicle(result.data);
    // console.log(vehicle);
  };

  const onInputChange = (event) => {
    //  console.log(event.target.value);
    setVehicle({ ...vehicle, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      //  console.log(vehicle);
      await Axios.put(
        `${process.env.REACT_APP_BACKEND_SERVER}/vehicles/${id}`,
        vehicle
      );
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
    <UserAuth>
      <div className="container">
        <h2 className="text-center mt-3">Edit Vehicle</h2>
        <form onSubmit={handleSubmit}>
          <div className="row mt-3 mb-5">
            <div className="col-lg-3 p-3">
              <h5 className="text-left mb-4">Information</h5>
              <hr />
              <div className="mb-3">
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
              </div>

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
                {/*               <input
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
        </form>

        <BottomBar handleSubmit={handleSubmit} handleCancel={handleCancel} />
      </div>
    </UserAuth>
  );
};

export default EditVehicle;
