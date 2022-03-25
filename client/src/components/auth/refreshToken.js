import axios from "axios";

const refreshToken = async () => {
  try {
    //  console.log("I am calling refreshToken");
    const { data } = await axios.post(
      `${process.env.REACT_APP_BACKEND_SERVER}/refresh-token`,
      {
        refreshToken: JSON.parse(window.localStorage.getItem("auth"))
          .refreshToken,
      }
    );
    window.localStorage.setItem("auth", JSON.stringify(data));
    return data;
  } catch (err) {
    console.log(err);
  }
};

export default refreshToken;
