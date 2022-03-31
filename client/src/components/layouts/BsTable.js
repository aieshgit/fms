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
import "react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";

const BsTable = (props) => {
  const sObject = props.sObject;
  const defaultSortedBy = props.defaultSortedBy;
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
    <div className="container table-pt">
      {/* <div className="jumbotron"> */}
      <div className="card shadow">
        <div className="card-header">
          <h3>{props.tableTitle}</h3>
        </div>
        <div className="card-body">
          {/*            <h2 className="card-title d-inline-block table-label">
              {props.tableTitle}
            </h2> */}
          {/*  <img src="../node_modules/bootstrap-icons/icons/alarm.svg" alt="" /> */}
          <ToolkitProvider
            bootstrap4
            sObject={props.sObject}
            keyField="id"
            data={props.tableData}
            columns={columns}
            search
            exportCSV={{
              onlyExportFiltered: true,
              exportAll: false,
            }}
          >
            {(props) => (
              <div>
                <Link
                  {...props.sObject}
                  className="btn btn-primary px-1 py-1 ml-5 d-inline-block"
                  to={`${sObject}/add`}
                >
                  {/* {props.sObject} */}
                  Add Data
                </Link>
                <ExportCSVButton {...props.csvProps}>
                  {/* <FaFileExport size="40" color="#0d6efd" className="mb-2" /> */}
                  <button
                    // type="button"
                    className="btn btn-primary px-1 py-1 ml-5 d-inline-block"
                  >
                    Export
                  </button>
                </ExportCSVButton>
                <div className="m-auto d-inline">
                  <SearchBar
                    {...props.searchProps}
                    srText={null}
                    style={{
                      width: "300px",
                      height: "34px",
                      marginLeft: "600px",
                      //  marginTop: "7px",
                      display: "inline",
                    }}
                  />
                </div>

                <BootstrapTable
                  {...props.baseProps}
                  striped
                  hover
                  bordered={false}
                  condensed //  rowStyle={rowStyle}
                  pagination={paginationFactory()}
                  /*  cellEdit={cellEditFactory({
                    mode: "dbclick",
                  })} */
                  filter={filterFactory()}
                  defaultSorted={defaultSortedBy}
                />
              </div>
            )}
          </ToolkitProvider>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};
export default BsTable;
