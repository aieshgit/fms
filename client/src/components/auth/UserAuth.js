import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { LoginContext } from "../context/Context.js";
import { useHistory } from "react-router-dom";
//import { SyncOutlined } from "@nt-design/icons";

const UserAuth = ({ children }) => {
  let history = useHistory();
  const [isUserAuth, setUserAuth] = useState(false);
  const [loginState] = useContext(LoginContext);

  useEffect(() => {
    // if (loginState && loginState.token) {
    checkUserAuth();
    //  }
    //}, [loginState && loginState.token]);
  }, []);

  const checkUserAuth = async () => {
    try {
      // console.log("hello there");
      //  console.log("checkUserAuthToken 1: " + loginState.token);
      //let varLocalStorage = JSON.parse(window.localStorage.getItem("auth"));
      const { data } = await axios.get(
        `${process.env.REACT_APP_BACKEND_SERVER}/user-auth`,
        {
          // headers: { Authorization: `Bearer ${loginState.token}` },
          headers: {
            authorization: `Bearer ${
              JSON.parse(window.localStorage.getItem("auth")).token
            }`,
          },
        }
      );

      if (data.ok) {
        setUserAuth(true);
      }
    } catch (err) {
      history.push("/login");
    }
  };
  // return !isUserAuth ? (<SyncOutLined spin className= "d-flex justify-content-center display-1 text-primary p-5/>")
  //return !isUserAuth ? false : [children];
  return !isUserAuth ? false : <>{children}</>;
};

export default UserAuth;
