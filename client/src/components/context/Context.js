import { useState, createContext, useEffect } from "react";

const LoginContext = createContext();

const LoginProvider = ({ children }) => {
  const [loginState, setLoginState] = useState({
    //  user: {},
    user: "",
    token: "",
  });

  useEffect(() => {
    setLoginState(JSON.parse(window.localStorage.getItem("auth")));
  }, []);

  return (
    <LoginContext.Provider value={[loginState, setLoginState]}>
      {children}
    </LoginContext.Provider>
  );
};

export { LoginContext, LoginProvider };
