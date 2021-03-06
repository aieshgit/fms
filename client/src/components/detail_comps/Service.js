import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Link, /* useHistory, */ useParams } from "react-router-dom";
//import BottomBar from "../layouts/BottomBar";
import Documents from "../list_comps/Documents";
import UserAuth from "../auth/UserAuth";

const Service = () => {
  // let history = useHistory();
  const { id } = useParams();
  const [service, setService] = useState({
    vehicleNum: "",
    regNum: "",
    serviceType: "",
    startDate: "",
    completionDate: "",
    repairer: "",
    serviceDbId: "",
  });

  useEffect(() => {
    loadService();
  }, []);

  const loadService = async () => {
    const result = await Axios.get(
      `${process.env.REACT_APP_BACKEND_SERVER}/services/${id}`
    );
    // console.log(result.data);
    setService(result.data);
    // console.log(service);
  };

  /*   const handleCancel = () => {
    setVehicle("");
    history.push("/services");
  };
 */
  return (
    <UserAuth>
      {/* <div className="table-container"> */}
      <div className="container">
        {/*         <Link className="btn btn-primary px-5" to="/services">
          Back
        </Link> */}
        <h2 className="text-center mt-3">Service</h2>
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
                  value={service.vehicleNum}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="serviceType" className="form-label mb-0">
                  Service Type
                </label>
                <input
                  type="text"
                  className="form-control mt-0"
                  disabled
                  readOnly
                  name="serviceType"
                  value={service.serviceType}
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
                  disabled
                  readOnly
                  name="startDate"
                  value={service.startDate}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="completionDate" className="form-label mb-0">
                  Completion Date
                </label>
                <input
                  type="date"
                  className="form-control mt-0"
                  disabled
                  readOnly
                  name="completionDate"
                  value={service.completionDate}
                />
              </div>
            </div>

            <div className="col-lg-3 p-3">
              <div className="mb-3">
                <label htmlFor="repairer" className="form-label mb-0">
                  Repairer
                </label>
                <input
                  type="text"
                  className="form-control mt-0"
                  disabled
                  readOnly
                  name="repairer"
                  value={service.repairer}
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

        {service.serviceDbId && <Documents parentDbId={service.serviceDbId} />}

        {/* <BottomBar handleSubmit={handleSubmit} handleCancel={handleCancel} p /> */}
      </div>
      {/* </div> */}
    </UserAuth>
  );
};

export default Service;
