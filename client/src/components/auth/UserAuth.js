import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { LoginContext } from "../context/Context.js";
import { useHistory } from "react-router-dom";
//import { SyncOutlined } from "@nt-design/icons";

const UserAuth = ({ children }) => {
  let history = useHistory();
  const [isUserAuth, setUserAuth] = useState(false);
  const [loginState, setLoginState] = useContext(LoginContext);

  useEffect(() => {
    // if (loginState && loginState.accessToken) {
    checkUserAuth();
    //  }
    //}, [loginState && loginState.Token]);
  }, []);

  const checkUserAuth = async () => {
    try {
      //  console.log("checkUserAuthToken 1: " + loginState.accessToken);
      //let varLocalStorage = JSON.parse(window.localStorage.getItem("auth"));
      const { data } = await axios.get(
        `${process.env.REACT_APP_BACKEND_SERVER}/user-auth` /* ,
        {
          // headers: { Authorization: `Bearer ${loginState.accessToken}` },
          //the above line of getting the token from context state is not working
          // so I am directly getting it from the localstorage, this is also making the idea of storing the
          //local storage in a context state useless
          headers: {
            authorization: `Bearer ${
              JSON.parse(window.localStorage.getItem("auth")).accessToken
            }`,
          },
        } */
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
