import React, { useState, useEffect } from "react";
import axios from "axios";

const Documents = (props) => {
  const parentDbId = props.parentDbId;

  const [documents, setDocuments] = useState([]);

  //mount
  useEffect(() => {
    console.log("first use effect");
    loadDocuments();
  }, []);

  /*   //update
  useEffect(() => {
    console.log("second use effect");
    loadDocuments();
  }, [documents.length]); */

  const loadDocuments = async () => {
    const result = await axios.get(
      `http://localhost:5000/documents/${parentDbId}`
    );
    setDocuments(result.data);
  };

  return (
    <>
      <div className="row">
        {documents.map((document, index) => (
          <div className="col-lg-3" key={index}>
            <a
              // href={document.filePath}
              href={`${process.env.REACT_APP_FILE_SERVER}${document.fileName}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {document.fileName}
            </a>
          </div>
        ))}
      </div>
    </>
  );
};

export default Documents;
