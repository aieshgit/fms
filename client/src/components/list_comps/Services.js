import React, { useState, useEffect } from "react";
import axios from "axios";
//import Table from "../layouts/Table";
//import ServiceTypeModal from "../users/ServiceTypeModal";
//import { Modal, Button } from "react-bootstrap";
import BsTable from "../layouts/BsTable";
import { textFilter } from "react-bootstrap-table2-filter";
import UserAuth from "../auth/UserAuth";
import { Link } from "react-router-dom";
import { customSort } from "../utilities/Helpers";

const Services = () => {
  /*    const tableTitle = "Services";
  const entity = "services";
  const addButton = "Add Service"; */
  /*   const headerItems = [
    "Service#",
    "Vehicle#",
    "Registration",
    "Service Type",
    "Start Date",
    "Completion Date",
    "Repairer",
    "Action",
  ];
  const columnOrder = [
    "serviceNum",
    "vehicleNum",
    "regNum",
    "serviceType",
    "startDate",
    "completionDate",
    "repairer",
  ]; */

  const columns = [
    {
      dataField: "serviceNum",
      text: "Service#",
      sort: true,
      sortFunc: customSort,
      formatter: (cell, row) => {
        return (
          <>
            <Link to={`services/${row.id}`}>{row.serviceNum}</Link>
          </>
        );
      },
    },
    {
      dataField: "regNum",
      text: "Registration",
      filter: textFilter(),
    },
    {
      dataField: "serviceType",
      text: "Service Type",
    },
    {
      dataField: "startDate",
      text: "Start Date",
      sort: true,
      // filter: textFilter(),
    },
    {
      dataField: "completionDate",
      text: "Completion Date",
    },
    {
      dataField: "repairer",
      text: "Repairer",
    },
    /*     {
      dataField: "id",
      text: "Actions",
      formatter: action,
    }, */
  ];

  const [services, setServices] = useState([]);

  useEffect(() => {
    loadServices();
  }, []);

  const loadServices = async () => {
    const result = await axios.get(
      `${process.env.REACT_APP_BACKEND_SERVER}/services`
    );
    // console.log(result);
    //  result.data.map((item) => delete item.id);
    setServices(result.data);
  };

  //delete service
  /*   const deleteService = async (id) => {
    await axios.delete(`http://localhost:5000/services/${id}`);
    loadServices();
  }; */

  return (
    /*     <div className="container">
      <Table
        tableTitle={tableTitle}
        entity={entity}
        headerItems={headerItems}
        tableData={services}
        columnOrder={columnOrder}
        deleteRecord={deleteService}
        addButton={addButton}
      /> */
    /*       <Modal>
        <Modal.Header></Modal.Header>
        <Modal.Title>Add Service</Modal.Title>
        <Modal.Body>
          <ServiceTypeModal />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary">Close Button</Button>
        </Modal.Footer>
      </Modal> */
    /*     </div> */
    <UserAuth>
      <BsTable
        sObject="services"
        tableTitle="Services"
        columns={columns}
        tableData={services}
        addButton="Add Service"
      />
    </UserAuth>
  );
};

export default Services;
