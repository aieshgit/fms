import React, { useState, useEffect } from "react";
import axios from "axios";
//import Table from "../layouts/Table";

const Documents = (props) => {
  /*   const tableTitle = "Services";
  const entity = "services";
  const addButton = "Add Service";
  const headerItems = [
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
  ];
 */
  const parentDbId = props.parentDbId;
  console.log(parentDbId);
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    loadDocuments();
  }, []);

  const loadDocuments = async () => {
    const result = await axios.get(`http://localhost:5000/documents/`);
    console.log(result);
    //  result.data.map((item) => delete item.id);
    setDocuments(result.data);
  };

  const deleteDocument = async (id) => {
    await axios.delete(`http://localhost:5000/documents/${id}`);
    loadDocuments();
  };

  return (
    <div className="container">
      {documents.map((document, index) => (
        <img src={document.filePath} key={index} alt="" />
      ))}
      {/*       <Table
        tableTitle={tableTitle}
        entity={entity}
        headerItems={headerItems}
        tableData={documents}
        columnOrder={columnOrder}
        deleteRecord={deleteDocument}
        addButton={addButton}
      /> */}
    </div>
  );
};

export default Documents;
