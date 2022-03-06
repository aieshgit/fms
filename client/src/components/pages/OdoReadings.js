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
      /*       sortFunc: (a, b, order, dataField) => {
        if (order === "asc" || !order) {
          return b.localeCompare(
            a,
            navigator.languages[0] || navigator.language,
            { numeric: true, ignorePunctuation: true }
          );
        }
        return a.localeCompare(
          b,
          navigator.languages[0] || navigator.language,
          { numeric: true, ignorePunctuation: true }
        );
      }, */
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
      filter: textFilter(),
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

  const [odoReadings, setOdoReadings] = useState([]);

  useEffect(() => {
    loadOdoReadings();
  }, []);

  const loadOdoReadings = async () => {
    const result = await axios.get("http://localhost:5000/odoReadings");
    // console.log(result);
    //  result.data.map((item) => delete item.id);
    setOdoReadings(result.data);
  };

  // delete odo reading
  /*   const deleteOdoReading = async (id) => {
    await axios.delete(`http://localhost:5000/odoReadings/${id}`);
    loadOdometer();
  }; */

  const defaultSorted = [
    {
      dataField: "odoNum", // if dataField is not match to any column you defined, it will be ignored.
      order: "asc", // desc or asc
    },
  ];

  return (
    <UserAuth>
      <BsTable
        sObject="OdoReadings"
        tableTitle="Odometer"
        columns={columns}
        tableData={odoReadings}
        addButton="Add Reading"
        defaultSorted={defaultSorted}
      />
    </UserAuth>
  );
};

export default OdoReadings;
