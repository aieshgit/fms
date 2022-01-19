import React, { useState } from "react";
import Axios from "axios";
import { toast } from "react-toastify";
//import { useHistory } from "react-router-dom";

const FileUpload = (props) => {
  // let history = useHistory();
  const [files, setFiles] = useState([]);
  const onInputChange = (e) => {
    setFiles(e.target.files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();

    for (let i = 0; i < files.length; i++) {
      // console.log(files);
      data.append("file", files[i]);
    }

    data.append("parentDbId", props.parentDbId);
    data.append("parentObject", props.parentObject);
    //console.log(data);

    try {
      await Axios.post("http://localhost:5000/upload", data);
      //history.push(`/services/edit/${props.parentUuid}`);
      window.location.reload(true);
      toast.success("Upload Successful", {
        position: toast.POSITION.TOP_CENTER,
      });
      //  window.location.reload(true);
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
      <div className="row mb-3">
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
        <div className="col-lg-4 mt-0 gx-0">
          <button type="submit" className="btn btn-primary mt-4">
            Upload
          </button>
        </div>
      </div>
    </form>
  );
};

export default FileUpload;
