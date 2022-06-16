/*eslint-env es6*/
import React, { useState, useEffect } from "react";
import axios from "axios";

/* import Vehicles from "../pages/vehicles"; */

const Dropdown = (props) => {
  const [obj, setObj] = useState([]);
  let currentValueExists = false;
  if (props.currentValue !== "" && props.currentValue !== null) {
    currentValueExists = true;
  }
  // console.log(props.currentValue);
  useEffect(() => {
    loadObject();
  }, []);

  const loadObject = async () => {
    const result = await axios.get(
      `${process.env.REACT_APP_BACKEND_SERVER}/${props.dropDownObject}`
    );
    //console.log(result.data);
    //  result.data.map((item) => delete item.id);
    setObj(result.data);
  };

  return (
    <>
      {/* {<option value="">Select</option>} */}
      {currentValueExists ? (
        <option value={props.currentValue} selected>
          {props.currentValue}
        </option>
      ) : (
        <option value="">Select</option>
      )}
      {obj.map((item, index) => (
        // <option value={item.id}>{item.regNum}</option>
        <option
          value={item[props.dropDownKey1]}
          dbid={item.dbId}
          key={props.dbId}
        >
          {/* {item[props.dropDownKey]} */}
          {item[props.dropDownKey1] + " [" + item[props.dropDownKey2] + "]"}
        </option>
      ))}
    </>
  );
};
export default Dropdown;
