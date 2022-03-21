import React, { useState, useContext } from "react";
import Axios from "axios";
import { LoginContext } from "../context/Context.js";
import { useHistory } from "react-router-dom";

const Login = () => {
  let history = useHistory();
  const [loginState, setLoginState] = useContext(LoginContext);
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const onInputChange = (event) => {
    // console.log(event.target.value);
    setLoginData({ ...loginData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await Axios.post(
        `${process.env.REACT_APP_BACKEND_SERVER}/login`,
        loginData
      );
      console.log(data);
      // can also do below
      //  const result = await Axios.post("http://localhost:5000/login", loginData);
      //  setState({ user: result.data.username, token: result.data.token });

      //set context state variable
      setLoginState({ user: data.username, token: data.token });

      //save in local storage
      window.localStorage.setItem("auth", JSON.stringify(data));
      // if not using context state below can be used as per pedro's video
      //window.localStorage.setItem("auth", "Bearer " + response.data.token);

      // redirect to dashboard/homepage
      history.push("/dashboard");
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div className="container login-container">
      <div className="row">
        <div className="col-md-4 offset-md-4">
          <div className="login-form bg-light mt-4 p-4">
            <form className="row g-3" onSubmit={handleSubmit}>
              <h4>Welcome Back</h4>
              <div className="col-12">
                <label>Username</label>
                <input
                  type="text"
                  name="username"
                  className="form-control"
                  placeholder="Username"
                  value={loginData.username}
                  onChange={onInputChange}
                />
              </div>
              <div className="col-12">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  placeholder="Password"
                  value={loginData.password}
                  onChange={onInputChange}
                />
              </div>
              <div className="col-12">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="rememberMe"
                  />
                  <label className="form-check-label" htmlFor="rememberMe">
                    {" "}
                    Remember me
                  </label>
                </div>
              </div>
              <div className="col-12">
                <button
                  type="submit"
                  className="btn btn-primary px-4 float-end"
                >
                  Login
                </button>
              </div>
            </form>
            <hr className="mt-4" />
            <div className="col-12">
              <p className="text-center mb-0">
                Have not account yet? <a href="#">Signup</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
