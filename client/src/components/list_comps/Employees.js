import React, { useState, useEffect } from "react";
import axios from "axios";
import BsTable from "../layouts/BsTable";
//import { textFilter } from "react-bootstrap-table2-filter";
import UserAuth from "../auth/UserAuth";
import { Link } from "react-router-dom";
import { customSort } from "../utilities/Helpers";
import { textFilter } from "react-bootstrap-table2-filter";

const Employees = () => {
  const columns = [
    {
      dataField: "employeeNum",
      text: "Employee#",
      sort: true,
      sortFunc: customSort,
      formatter: (cell, row) => {
        return (
          <>
            <Link to={`employees/${row.id}`}>{row.employeeNum}</Link>
          </>
        );
      },
    },
    {
      dataField: "fullName",
      text: "Name",
      filter: textFilter(),
    },
    {
      dataField: "jobTitle",
      text: "Job Title",
    },
    {
      dataField: "licenseNum",
      text: "License#",
      //  sort: true,
    },
    /*     {
      dataField: "id",
      text: "Actions",
      formatter: action,
    }, */
  ];

  // const defaultSorted = [{ datafield: "employeeNum", order: "asc" }];

  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    loadEmployees();
  }, []);

  const loadEmployees = async () => {
    // const { data } = await axios.get("http://localhost:5000/employees");
    const { data } = await axios.get(
      `${process.env.REACT_APP_BACKEND_SERVER}/employees`
    );
    setEmployees(data);
  };

  //delete service
  /*   const deleteService = async (id) => {
    await axios.delete(`http://localhost:5000/services/${id}`);
    loadServices();
  }; */

  return (
    <UserAuth>
      <BsTable
        sObject="employees"
        tableTitle="Employees"
        columns={columns}
        tableData={employees}
        addButton="Add Employee"
        // defaultSortedBy={defaultSorted}
      />
    </UserAuth>
  );
};

export default Employees;
