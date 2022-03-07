import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Link, /* useHistory, */ useParams } from "react-router-dom";
//import BottomBar from "../layouts/BottomBar";
//import Documents from "../pages/Documents";
import UserAuth from "../auth/UserAuth";

const OdoReading = () => {
  // let history = useHistory();
  const { id } = useParams();
  const [odoReading, setOdoReading] = useState({
    vehicleNum: "",
    regNum: "",
    readingDate: "",
    initialReading: "",
    finalReading: "",
    mileage: "",
    odoReadingDbId: "",
  });

  useEffect(() => {
    loadOdoReading();
  }, []);

  const loadOdoReading = async () => {
    const result = await Axios.get(
      `${process.env.REACT_APP_BACKEND_SERVER}/odoReadings/${id}`
    );
    // console.log(result.data);
    setOdoReading(result.data);
    // console.log(service);
  };

  /*   const handleCancel = () => {
    setVehicle("");
    history.push("/services");
  };
 */
  return (
    <UserAuth>
      <div className="table-container">
        <div className="container p-5 table-container">
          <Link className="btn btn-primary px-5" to="/odoReadings">
            Back
          </Link>
          <h2 className="text-center m-4">Odometer Reading</h2>
          <form>
            <div className="row my-5">
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
                    value={odoReading.vehicleNum}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="readingDate" className="form-label mb-0">
                    Reading Date
                  </label>
                  <input
                    type="date"
                    className="form-control mt-0"
                    disabled
                    readOnly
                    name="readingDate"
                    value={odoReading.readingDate}
                  />
                </div>
              </div>

              <div className="col-lg-3 p-3">
                <div className="mb-3">
                  <label htmlFor="initialReading" className="form-label mb-0">
                    Initial Reading
                  </label>
                  <input
                    type="text"
                    className="form-control mt-0"
                    disabled
                    readOnly
                    name="initialReading"
                    value={odoReading.initialReading}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="finalReading" className="form-label mb-0">
                    Final Reading
                  </label>
                  <input
                    type="text"
                    className="form-control mt-0"
                    disabled
                    readOnly
                    name="finalReading"
                    value={odoReading.finalReading}
                  />
                </div>
              </div>

              <div className="col-lg-3 p-3">
                <div className="mb-3">
                  <label htmlFor="mileage" className="form-label mb-0">
                    Mileage
                  </label>
                  <input
                    type="text"
                    className="form-control mt-0"
                    disabled
                    readOnly
                    name="mileage"
                    value={odoReading.mileage}
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
                    disabled
                    readOnly
                    name="SpareField"
                    // value={service.completionDate}
                  />
                </div>
              </div>
            </div>
          </form>

          {/* <BottomBar handleSubmit={handleSubmit} handleCancel={handleCancel} p /> */}
        </div>
      </div>
    </UserAuth>
  );
};

export default OdoReading;
