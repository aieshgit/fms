import React, { useState, useEffect } from "react";
import axios from "axios";
//import Table from "../layouts/Table";
//import MaterialTable from "../layouts/MaterialTable";
//import MuiDataGrid from "../layouts/MuiDataGrid";
//import MaterialTable from "material-table";
//import DataTable from "../layouts/Table";
//import BootstrapTable from "react-bootstrap-table-next";
//import paginationFactory from "react-bootstrap-table2-paginator";
//import cellEditFactory, { Type } from "react-bootstrap-table2-editor";
//import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
//import { Link } from "react-router-dom";
//import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import BsTable from "../layouts/BsTable";

const Vehicles = () => {
  /*   const tableTitle = "Vehicles";
  const entity = "vehicles";
  const addButton = "Add Vehicle";
  const headerItems = [
    "Vehicle#",
    "Registration",
    "VIN/Chassis",
    "Make",
    "Model",
    "Build Date",
    "Action",
  ];
  const columnOrder = [
    "vehicleNum",
    "regNum",
    "vin",
    "make",
    "model",
    "buildDate",
  ]; */

  //for mui datagrid
  /*   const columns = [
    {
      field: "vehicleNum",
      headerName: "Vehicle#",
      width: 200,
    },
    {
      field: "regNum",
      headerName: "Registration",
      width: 200,
    },
    {
      field: "vin",
      headerName: "VIN/Chassis",
      width: 200,
    },
    {
      field: "make",
      headerName: "Make",
      width: 200,
    },
    {
      field: "model",
      headerName: "Model",
      width: 200,
    },
    {
      field: "buildDate",
      headerName: "Build Date",
      width: 200,
    },
  ]; */
  //for mui datagrid

  //for material-table
  /*   const columns2 = [
    {
      field: "vehicleNum",
      title: "Vehicle#",
    },
    {
      field: "regNum",
      title: "Registration",
    },
    {
      field: "vin",
      title: "VIN/Chassis",
    },
    {
      field: "make",
      title: "Make",
    },
    {
      field: "model",
      title: "Model",
    },
    {
      field: "buildDate",
      title: "Build Date",
    },
  ]; */
  //for material-table

  //action for bootstrap table next
  /*   const action = (id, row) => {
    return (
      <>
        <Link className="btn btn-primary me-2" to={`vehicles/${id}`}>
          View
        </Link>
        <Link className="btn btn-warning me-2" to={`vehicles/edit/${id}`}>
          Edit
        </Link>
      </>
    );
  }; */
  //for bootstrap table
  const columns = [
    {
      dataField: "vehicleNum",
      text: "Vehicle#",
      // sort: true,
      //  filter: textFilter(),
    },
    {
      dataField: "regNum",
      text: "Registration",
    },
    {
      dataField: "vin",
      text: "VIN/Chassis",
    },
    {
      dataField: "make",
      text: "Make",
    },
    {
      dataField: "model",
      text: "Model",
    },
    {
      dataField: "buildDate",
      text: "Build Date",
    },
    /*     {
      dataField: "id",
      text: "Actions",
      formatter: action,
    }, */
  ];
  //for bootstrap table

  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    loadVehicles();
  }, []);

  const loadVehicles = async () => {
    const result = await axios.get("http://localhost:5000/vehicles");
    // console.log(result);
    //  result.data.map((item) => delete item.id);
    setVehicles(result.data);
  };

  // delete vehicle
  /*   const deleteVehicle = async (id) => {
    await axios.delete(`http://localhost:5000/vehicles/${id}`);
    loadVehicles();
  }; */

  return (
    /*       <Table
        tableTitle={tableTitle}
        entity={entity}
        headerItems={headerItems}
        tableData={vehicles}
        columnOrder={columnOrder}
        deleteRecord={deleteVehicle}
        addButton={addButton}
      /> */
    /* <MaterialTable /> */
    /* <MuiDataGrid rows={vehicles} columns={columns}></MuiDataGrid> */
    /* <MaterialTable title="Vehicles" columns={columns2} data={vehicles} /> */
    /* <DataTable ></DataTable> */
    /*     <div className="table-container">
      <div className="container table-container">
        <div className="card shadow">
          <div className="card-body">
            <h2 className="card-title d-inline-block table-label">
              Manage Vehicles
            </h2>
            <Link
              className="btn btn-primary px-2 py-2 mt-1 ml-3 d-inline-block"
              to="/vehicles/add"
            >
              Add Vehicle
            </Link>
            <BootstrapTable
              keyField="id"
              data={vehicles}
              columns={columns3}
              striped
              hover
              bordered={false}
              pagination={paginationFactory()}
              cellEdit={cellEditFactory({
                mode: "dbclick",
              })}
              filter={filterFactory()}
            />
          </div>
        </div>
      </div>
    </div> */
    <BsTable
      sObject="vehicles"
      tableTitle="Vehicles"
      columns={columns}
      tableData={vehicles}
      addButton="Add Vehicle"
    />
  );
};

export default Vehicles;
