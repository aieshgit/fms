import React, { useState, useEffect } from "react";
import axios from "axios";
import UserAuth from "../auth/UserAuth";
import FileDownload from "js-file-download";

const Documents = (props) => {
  const parentDbId = props.parentDbId;

  const [documents, setDocuments] = useState([]);

  //mount
  useEffect(() => {
    // console.log("first use effect");
    loadDocuments();
  }, []);

  /*   //update
  useEffect(() => {
    console.log("second use effect");
    loadDocuments();
  }, [documents.length]); */

  const loadDocuments = async () => {
    const result = await axios.get(
      // `http://localhost:5000/documents/${parentDbId}`
      `${process.env.REACT_APP_BACKEND_SERVER}/documents/${parentDbId}`
    );
    setDocuments(result.data);
  };

  const handleDownload = async (e, fileName) => {
    e.preventDefault();
    const file = await axios.get(
      // `http://localhost:5000/documents/${parentDbId}`
      `${process.env.REACT_APP_BACKEND_SERVER}/download/${fileName}`,
      { responseType: "blob" }
    );
    FileDownload(file.data, fileName);
  };

  return (
    <UserAuth>
      <div className="row">
        {documents.map((document, index) => (
          <div className="col-lg-3" key={index}>
            <a
              // href={`${process.env.REACT_APP_FILE_SERVER}/${document.fileName}`}
              href="javascript"
              // target="_blank"
              //  rel="noopener noreferrer"
              // download
              onClick={(e) => handleDownload(e, document.fileName)}
            >
              {document.fileName}
            </a>
          </div>
        ))}
      </div>
    </UserAuth>
  );
};

export default Documents;
