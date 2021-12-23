import React, { useMemo } from "react";
import { useTable } from "react-table";
import { Link } from "react-router-dom";

const DataTable = (props) => {
  console.log(props.columns);
  console.log(props.tableData);

  /*  const columns = props.columns;
  const data = props.tableData; */
  const columns = useMemo(() => props.columns, [props.columns]);
  const data = useMemo(() => props.tableData, [props.tableData]);

  /*   const columns2 = [
    ...columns,
    {
      Header: "Actions",
      accessor: "actions",
      Cell: (row) => (
        <Link
          className="btn btn-warning me-2"
          to={`${props.entity}/edit/${row.values.id}`}
        >
          Edit
        </Link>
      ),
    },
  ]; */

  const tableHooks = (hooks) => {
    hooks.visibleColumns.push((columns) => [
      ...columns,
      {
        id: "Edit",
        Header: "Action",
        Cell: ({ row }) => (
          <Link
            className="btn btn-warning me-2"
            to={`${props.entity}/edit/${row.values.id}`}
          >
            Edit
          </Link>
        ),
      },
    ]);
  };

  const tableInstance = useTable({ columns: columns, data: data }, tableHooks);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  /*   console.log("getTableProps:" + getTableProps);
  console.log("getTableBodyProps:" + getTableBodyProps);
  console.log("headerGroups:" + headerGroups);
  console.log("rows:" + rows);
  console.log("prepareRow:" + prepareRow); */

  return (
    <>
      <div className="table-responsive">
        <div className="table-wrapper ">
          <div className="table-title bg-primary">
            <div className="row">
              <div className="col-sm-6">
                <h2>
                  Manage <b>{props.tableTitle}</b>
                </h2>
              </div>
              <div className="col-sm-6">
                <Link className="btn btn-dark" to={`${props.entity}/add`}>
                  {props.addButton}
                </Link>
              </div>
            </div>
          </div>
          <table
            {...getTableProps()}
            className="table table-striped table-hover"
          >
            <thead>
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th {...column.getHeaderProps()}>
                      {column.render("Header")}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {rows.map((row) => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map((cell) => {
                      return (
                        <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default DataTable;
