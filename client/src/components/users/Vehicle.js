import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Link, /* useHistory, */ useParams } from "react-router-dom";
//import BottomBar from "../layouts/BottomBar";

const Vehicle = () => {
  // let history = useHistory();
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
    const result = await Axios.get(`http://localhost:5000/vehicles/${id}`);
    // console.log(result.data);
    setVehicle(result.data);
    // console.log(vehicle);
  };

  /*   const handleCancel = () => {
    setVehicle("");
    history.push("/vehicles");
  };
 */
  return (
    <div className="table-container">
      <div className="container p-5">
        <Link className="btn btn-primary px-5" to="/vehicles">
          Back
        </Link>
        <h2 className="text-center m-4">Vehicle</h2>
        <form>
          <div className="row my-5">
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
                />
              </div>

              <div className="mb-3">
                <label htmlFor="make" className="form-label mb-0">
                  Make
                </label>
                <input
                  type="text"
                  className="form-control mt-0"
                  disabled
                  readOnly
                  name="make"
                  value={vehicle.make}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="model" className="form-label mb-0">
                  Model
                </label>
                <input
                  type="text"
                  className="form-control mt-0"
                  disabled
                  readOnly
                  name="model"
                  value={vehicle.model}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="vin" className="form-label mb-0">
                  Vin/Chasis
                </label>
                <input
                  type="text"
                  className="form-control mt-0"
                  disabled
                  readOnly
                  name="vin"
                  value={vehicle.vin}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="vehicleType" className="form-label mb-0">
                  Vehicle Type
                </label>
                <input
                  type="text"
                  className="form-control mt-0"
                  disabled
                  readOnly
                  name="vehicleType"
                  value={vehicle.vehicleType}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="buildDate" className="form-label mb-0">
                  Build Date
                </label>
                <input
                  type="date"
                  className="form-control mt-0"
                  disabled
                  readOnly
                  name="buildDate"
                  value={vehicle.buildDate}
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
                  disabled
                  readOnly
                  name="regNum"
                  value={vehicle.regNum}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="regState" className="form-label mb-0">
                  State
                </label>
                <input
                  type="text"
                  className="form-control mt-0"
                  disabled
                  readOnly
                  name="regState"
                  value={vehicle.regState}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="regDueDate" className="form-label mb-0">
                  Due Date
                </label>
                <input
                  type="date"
                  className="form-control mt-0"
                  disabled
                  readOnly
                  name="regDueDate"
                  value={vehicle.regDueDate}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="frequency" className="form-label mb-0">
                  Frequency
                </label>
                <input
                  type="text"
                  className="form-control mt-0"
                  disabled
                  readOnly
                  name="frequency"
                  value={vehicle.frequency}
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
                  disabled
                  readOnly
                  name="engineNum"
                  value={vehicle.engineNum}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="engineMake" className="form-label mb-0">
                  Make
                </label>
                <input
                  type="text"
                  className="form-control mt-0"
                  disabled
                  readOnly
                  name="engineMake"
                  value={vehicle.engineMake}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="engineModel" className="form-label mb-0">
                  Model
                </label>
                <input
                  type="text"
                  className="form-control mt-0"
                  disabled
                  readOnly
                  name="engineModel"
                  value={vehicle.engineModel}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="engineCapacity" className="form-label mb-0">
                  Capacity
                </label>
                <input
                  type="text"
                  className="form-control mt-0"
                  disabled
                  readOnly
                  name="engineCapacity"
                  value={vehicle.engineCapacity}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="engineGearBox" className="form-label mb-0">
                  Gearbox
                </label>
                <input
                  type="text"
                  className="form-control mt-0"
                  disabled
                  readOnly
                  name="engineGearBox"
                  value={vehicle.engineGearBox}
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
                  disabled
                  readOnly
                  name="etag"
                  value={vehicle.etag}
                />
              </div>
            </div>
          </div>
        </form>

        {/*   <BottomBar /> */}
      </div>
    </div>
  );
};

export default Vehicle;
