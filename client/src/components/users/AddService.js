import React, { useState } from "react";
import Axios from "axios";
import { useHistory } from "react-router-dom";
import BottomBar from "../layouts/BottomBar";
import Dropdown from "../layouts/Dropdown";
import UserAuth from "../auth/UserAuth";

const AddService = () => {
  let history = useHistory();
  const [service, setService] = useState({
    vehicleNum: "",
    serviceType: "",
    startDate: "",
    completionDate: "",
    repairer: "",
    vehicleDbId: "",
  });

  const onInputChange = (event) => {
    // console.log(event.target.value)

    if (event.target.name === "vehicleNum") {
      setService({
        ...service,
        [event.target.name]: event.target.value,
        vehicleDbId: event.target.selectedOptions[0].getAttribute("dbid"),
      });
    } else {
      setService({ ...service, [event.target.name]: event.target.value });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      console.log(service);
      await Axios.post("http://localhost:5000/services", service);
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
    <UserAuth>
      <div className="table-container">
        <div className="container p-5">
          <h2 className="text-center m-4">Add Service</h2>
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
                    value={service.vehicleNum}
                    onChange={onInputChange}
                  >
                    <Dropdown
                      dropDownObject="vehicles"
                      dropDownKey1="vehicleNum"
                      dropDownKey2="regNum"
                    />
                  </select>
                </div>

                <div className="mb-3">
                  <label htmlFor="serviceType" className="form-label mb-0">
                    Service Type
                  </label>
                  <select
                    className="form-select mt-0"
                    name="serviceType"
                    value={service.serviceType}
                    onChange={onInputChange}
                  >
                    <option value="DEFAULT">Select</option>
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                    <option value="D">D</option>
                    <option value="E">E</option>
                  </select>
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
                    value={service.completionDate}
                    onChange={onInputChange}
                  />
                </div>
              </div>
            </div>
          </form>

          <BottomBar
            handleSubmit={handleSubmit}
            handleCancel={handleCancel}
            p
          />
        </div>
      </div>
    </UserAuth>
  );
};

export default AddService;
