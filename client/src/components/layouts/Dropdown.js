/*eslint-env es6*/
import React, { useState, useEffect } from "react";
import axios from "axios";

/* import Vehicles from "../pages/vehicles"; */

const Dropdown = (props) => {
  const [obj, setObj] = useState([]);

  useEffect(() => {
    loadObject();
  }, []);

  const loadObject = async () => {
    const result = await axios.get(
      `http://localhost:5000/${props.dropDownObject}`
    );
    //console.log(result.data);
    //  result.data.map((item) => delete item.id);
    setObj(result.data);
  };

  return (
    <>
      {<option value="DEFAULT">Select</option>}
      {obj.map((item, index) => (
        // <option value={item.id}>{item.regNum}</option>
        <option
          value={item[props.dropDownKey1]}
          dbid={item.dbId}
          key={props.dropDownKey1}
        >
          {/* {item[props.dropDownKey]} */}
          {item[props.dropDownKey1] + " [" + item[props.dropDownKey2] + "]"}
        </option>
      ))}
    </>
  );
};
export default Dropdown;
