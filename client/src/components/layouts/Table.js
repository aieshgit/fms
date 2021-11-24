import React, { useState } from "react";
import { Link } from "react-router-dom";
import ConfirmationModal from "../layouts/ConfirmationModal";

const Table = (props) => {
  const [modal, setModal] = useState({ showModal: false, id: "" });

  const handleModal = (RecordId) => {
    setModal({ showModal: true, id: RecordId });
  };

  const handleCloseModal = () => {
    setModal({ showModal: false, id: "" });
  };

  return (
    <>
      <div className="table-responsive">
        <div className="table-wrapper">
          <div className="table-title bg-primary">
            <div className="row">
              <div className="col-sm-6">
                <h2>
                  Manage <b>{props.tableTitle}</b>
                </h2>
              </div>
              <div className="col-sm-6">
                <Link className="btn btn-dark" to="vehicles/add">
                  Add Vehicle
                </Link>
              </div>
            </div>
          </div>

          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th scope="col">#</th>
                {props.headerItems.map((headerItem, index) => (
                  <th key={index} scope="col">
                    {headerItem}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {Object.values(props.tableData).map((rowData, index2) => (
                <tr>
                  <th key={index2} scope="row">
                    {index2 + 1}
                  </th>

                  {props.orderedColumns.map((orderedColumn, index3) => (
                    <td key={index3}>{rowData[orderedColumn]}</td>
                  ))}

                  {/*                   {Object.values(rowData).map((colValue, index2) => (
                    <td key={index2}>{colValue}</td>
                  ))} */}

                  <td>
                    <Link
                      className="btn btn-primary me-2"
                      to={`${props.entity}/${rowData.id}`}
                    >
                      View
                    </Link>
                    <Link
                      className="btn btn-warning me-2"
                      to={`${props.entity}/edit/${rowData.id}`}
                    >
                      Edit
                    </Link>
                    <Link
                      className="btn btn-danger"
                      // onClick={() => props.deleteRecord(rowData.id)}
                      onClick={() => handleModal(rowData.id)}
                      to={`/${props.entity}`}
                    >
                      Delete
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <ConfirmationModal
        show={modal.showModal}
        id={modal.id}
        handleCloseModal={handleCloseModal}
        handleDelete={props.deleteRecord}
      />
    </>
  );
};

export default Table;
