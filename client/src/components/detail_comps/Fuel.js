import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Link, /* useHistory, */ useParams } from "react-router-dom";
//import BottomBar from "../layouts/BottomBar";
//import Documents from "../pages/Documents";
import UserAuth from "../auth/UserAuth";

const Fuel = () => {
  // let history = useHistory();
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
    // console.log(result.data);
    setFuel(result.data);
    // console.log(service);
  };

  /*   const handleCancel = () => {
    setVehicle("");
    history.push("/services");
  };
 */
  return (
    <UserAuth>
      <div className="container">
        {/*           <Link className="btn btn-primary px-5" to="/odoReadings">
            Back
          </Link> */}
        <h2 className="text-center mt-3">Fuel</h2>
        <form>
          <div className="row mt-3 mb-5">
            <div className="col-lg-3 p-3">
              <div className="mb-3">
                <label htmlFor="vehicleNum" className="form-label mb-0">
                  Vehicle#
                </label>
                {/*               <select
                type="text"
                className="form-select mt-0"
                disabled
                readOnly
                name="vehicleNum"
                value={service.vehicleNum}
              ></select> */}
                <input
                  type="text"
                  className="form-control mt-0"
                  disabled
                  readOnly
                  name="vehicleNum"
                  value={fuel.vehicleNum}
                />
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
                  disabled
                  readOnly
                  name="fuelDate"
                  value={fuel.fuelDate}
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
                  disabled
                  readOnly
                  name="fuelQty"
                  value={fuel.fuelQty}
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
                  disabled
                  readOnly
                  name="totalFuelCost"
                  value={fuel.totalFuelCost}
                />
              </div>
            </div>
          </div>
        </form>

        {/* <BottomBar handleSubmit={handleSubmit} handleCancel={handleCancel} p /> */}
      </div>
    </UserAuth>
  );
};

export default Fuel;
