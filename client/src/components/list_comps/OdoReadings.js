// eslint-disable-next-line
import React, { useState, useEffect } from "react";
import axios from "axios";
import BsTable from "../layouts/BsTable";
import { textFilter } from "react-bootstrap-table2-filter";
import UserAuth from "../auth/UserAuth";
import { Link } from "react-router-dom";
import { customSort } from "../utilities/Helpers";

const OdoReadings = () => {
  const columns = [
    {
      dataField: "odoNum",
      text: "Odometer#",
      sort: true,
      sortFunc: customSort,
      //formatter: drillDown,
      formatter: (cell, row) => {
        return (
          <>
            <Link to={`odoReadings/${row.id}`}>{row.odoNum}</Link>
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
      dataField: "readingDate",
      text: "Date",
    },
    {
      dataField: "initialReading",
      text: "Initial Reading",
    },
    {
      dataField: "finalReading",
      text: "Final Reading",
    },
    {
      dataField: "mileage",
      text: "Mileage",
    },
  ];

  const defaultSortedBy = [
    {
      dataField: "odoNum",
      order: "desc", // or desc
    },
  ];

  const [odoReadings, setOdoReadings] = useState([]);

  useEffect(() => {
    loadOdoReadings();
  }, []);

  const loadOdoReadings = async () => {
    const result = await axios.get(
      `${process.env.REACT_APP_BACKEND_SERVER}/odoReadings`
    );
    // console.log(result);
    //  result.data.map((item) => delete item.id);
    setOdoReadings(result.data);
  };

  // delete odo reading
  /*   const deleteOdoReading = async (id) => {
    await axios.delete(`http://localhost:5000/odoReadings/${id}`);
    loadOdometer();
  }; */

  return (
    <UserAuth>
      <BsTable
        sObject="OdoReadings"
        tableTitle="Odometer"
        columns={columns}
        tableData={odoReadings}
        addButton="Add Reading"
        defaultSortedBy={defaultSortedBy}
      />
    </UserAuth>
  );
};

export default OdoReadings;
