import React from "react";
import { Link } from "react-router-dom";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import cellEditFactory, { Type } from "react-bootstrap-table2-editor";
import filterFactory from "react-bootstrap-table2-filter";
import { BsFillPencilFill, BsFillEyeFill } from "react-icons/bs";
import { FaFileExport } from "react-icons/fa";
import ToolkitProvider, {
  Search,
  CSVExport,
} from "react-bootstrap-table2-toolkit";
//import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";

const BsTable = (props) => {
  const action = (id, row) => {
    return (
      <>
        {/*         <Link
          //className="btn btn-primary btn-sm me-3"
          to={`${props.sObject}/${id}`}
        >
          <BsFillEyeFill className="me-5" />

        </Link> */}
        <Link
          // className="btn btn-warning btn-sm me-3"
          to={`${props.sObject}/edit/${id}`}
        >
          <BsFillPencilFill color="#f28500" className="ms-3" />
          {/* Edit */}
        </Link>
      </>
    );
  };

  /*   const drillDown = (cell, row) => {
    return (
      <>
        <Link
          //className="btn btn-primary btn-sm me-3"
          to={`odoReadings/${row.id}`}
        >
          {row.odoNum}
        </Link>
      </>
    );
  }; */

  const columns = [
    ...props.columns,
    {
      dataField: "id",
      text: "Actions",
      formatter: action,
    },
  ];

  //const rowStyle = { height: "15px", padding: "5px 0" };
  const { ExportCSVButton } = CSVExport;
  const { SearchBar } = Search;

  return (
    // <div className="table-container">
    <div className="container table-pt d-flex">
      <div className="card shadow">
        <div className="card-body m-auto">
          <h2 className="card-title d-inline-block table-label">
            {props.tableTitle}
          </h2>
          {/*  <img src="../node_modules/bootstrap-icons/icons/alarm.svg" alt="" /> */}
          <Link
            className="btn btn-primary px-2 py-2 mt-1 ml-3 d-inline-block"
            to={`${props.sObject}/add`}
          >
            {props.addButton}
          </Link>
          <ToolkitProvider
            //  bootstrap4
            keyField="id"
            data={props.tableData}
            columns={columns}
            defaultSorted={props.defaultSorted}
            search
            exportCSV={{
              onlyExportFiltered: true,
              exportAll: false,
            }}
          >
            {(props) => (
              <div>
                <SearchBar
                  {...props.searchProps}
                  style={{ width: "400px", height: "40px" }}
                />
                <ExportCSVButton {...props.csvProps}>
                  <FaFileExport size="40" color="#0d6efd" className="mb-2" />
                </ExportCSVButton>
                <BootstrapTable
                  {...props.baseProps}
                  striped
                  hover
                  bordered={false}
                  condensed //  rowStyle={rowStyle}
                  pagination={paginationFactory()}
                  cellEdit={cellEditFactory({
                    mode: "dbclick",
                  })}
                  filter={filterFactory()}
                />
              </div>
            )}
          </ToolkitProvider>
        </div>
      </div>
    </div>
    // </div>
  );
};
export default BsTable;
