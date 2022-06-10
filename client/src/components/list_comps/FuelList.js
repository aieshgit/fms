// eslint-disable-next-line
import React, { useState, useEffect } from "react";
import axios from "axios";
import BsTable from "../layouts/BsTable";
import { textFilter } from "react-bootstrap-table2-filter";
import UserAuth from "../auth/UserAuth";
import { Link } from "react-router-dom";
import { customSort } from "../utilities/Helpers";

const FuelList = () => {
  const columns = [
    {
      dataField: "fuelNum",
      text: "Fuel#",
      sort: true,
      sortFunc: customSort,
      //formatter: drillDown,
      formatter: (cell, row) => {
        return (
          <>
            <Link to={`fuel/${row.id}`}>{row.fuelNum}</Link>
          </>
        );
      },
    },
    {
      dataField: "regNum",
      text: "Registration",
      filter: textFilter({ style: { height: "33px", width: "120px" } }),
    },
    {
      dataField: "fuelDate",
      text: "Date",
    },
    {
      dataField: "fuelQty",
      text: "Quantity (ltr.)",
    },
    {
      dataField: "totalFuelCost",
      text: "Total Cost ($)",
    },
  ];

  const defaultSortedBy = [
    {
      dataField: "fuelNum",
      order: "desc", // or desc
    },
  ];

  const [fuelList, setFuelList] = useState([]);

  useEffect(() => {
    loadfuelList();
  }, []);

  const loadfuelList = async () => {
    const result = await axios.get(
      `${process.env.REACT_APP_BACKEND_SERVER}/fuel`
    );
    // console.log(result);
    //  result.data.map((item) => delete item.id);
    setFuelList(result.data);
  };

  // delete odo reading
  /*   const deleteOdoReading = async (id) => {
    await axios.delete(`http://localhost:5000/odoReadings/${id}`);
    loadOdometer();
  }; */

  return (
    <UserAuth>
      <BsTable
        sObject="fuel"
        tableTitle="Fuel"
        columns={columns}
        tableData={fuelList}
        addButton="Add Fuel"
        defaultSortedBy={defaultSortedBy}
      />
    </UserAuth>
  );
};

export default FuelList;
