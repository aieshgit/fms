import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import BottomBar from "../layouts/BottomBar";
import FileUpload from "../layouts/FileUpload";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Documents from "../pages/Documents";

const EditService = () => {
  let history = useHistory();
  const { id } = useParams();
  const [service, setService] = useState({
    vehicleNum: "",
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
    const result = await Axios.get(`http://localhost:5000/services/${id}`);
    // console.log(result.data);
    setService(result.data);
  };

  const onInputChange = (event) => {
    //  console.log(event.target.value);
    setService({ ...service, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      //  console.log(vehicle);
      await Axios.put(`http://localhost:5000/services/${id}`, service);
      //  console.log(vehicle);
      history.push("/services");
    } catch (err) {
      console.error(err.message);
    }
  };

  const handleCancel = () => {
    setService("");
    history.push("/services");
  };

  return (
    <div className="container p-5">
      <h2 className="text-center m-4">Edit Service</h2>
      <form onSubmit={handleSubmit}>
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
                onChange={onInputChange}
              >
                <Dropdown dropDownObject="vehicles" dropDownKey="regNum" />
              </select> */}
              <input
                type="text"
                className="form-select mt-0"
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
                name="serviceType"
                value={service.serviceType}
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
                value={service.startDate}
                onChange={onInputChange}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="completionDate" className="form-label mb-0">
                Completion Date
              </label>
              <input
                type="date"
                className="form-control mt-0"
                name="completionDate"
                value={service.completionDate}
                onChange={onInputChange}
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
                name="repairer"
                value={service.repairer}
                onChange={onInputChange}
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
                //   value={service.completionDate}
                //   onChange={onInputChange}
              />
            </div>
          </div>
        </div>
      </form>

      <FileUpload
        parentObject={"service"}
        parentDbId={service.serviceDbId}
        parentUuid={id}
      />
      <ToastContainer />

      {service.serviceDbId && <Documents parentDbId={service.serviceDbId} />}

      <BottomBar handleSubmit={handleSubmit} handleCancel={handleCancel} p />
    </div>
  );
};

export default EditService;
