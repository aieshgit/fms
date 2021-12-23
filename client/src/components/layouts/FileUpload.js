import React, { useState } from "react";
import Axios from "axios";
//import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

const FileUpload = (props) => {
  const [files, setFiles] = useState([]);
  const onInputChange = (e) => {
    setFiles(e.target.files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    for (let i = 0; i < files.length; i++) {
      data.append("file", files[i]);
    }
    data.append("parentDbId", props.parentDbId);
    data.append("parentObject", props.parentObject);

    try {
      await Axios.post("http://localhost:5000/upload", data);
      // console.log(res);
      //history.push("/upload");
      setFiles([]);
      toast.success("Upload Successful", {
        position: toast.POSITION.TOP_CENTER,
      });
    } catch (err) {
      console.error(err.message);
      toast.error("Upload Error", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  return (
    <form
      //  action="http://localhost:5000/upload"
      //  method="POST"
      //encType="multipart/form-data"
      onSubmit={handleSubmit}
    >
      <div className="row">
        <div className="col-lg-4">
          <label htmlFor="formFileMultiple" className="form-label mb-0">
            Add files
          </label>
          <input
            className="form-control"
            type="file"
            id="formFileMultiple"
            name="file"
            multiple
            onChange={onInputChange}
          />
        </div>
        <div className="col-lg-4 mb-5 gx-0">
          <button type="submit" className="btn btn-primary mt-4">
            Upload
          </button>
        </div>
      </div>
    </form>
  );
};

export default FileUpload;
