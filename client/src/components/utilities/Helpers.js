//import axios from "axios";

/* export function plus(a, b) {
    return a + b;
  }
 */
export function customSort(a, b, order, dataField, rowA, rowB) {
  if (order === "desc" || !order) {
    return b.localeCompare(a, navigator.languages[0] || navigator.language, {
      numeric: true,
      ignorePunctuation: true,
    });
  }
  return a.localeCompare(b, navigator.languages[0] || navigator.language, {
    numeric: true,
    ignorePunctuation: true,
  });
}

/* export function refreshToken() {

} */
/* export const refreshToken = async () => {
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
}; */

//export default refreshToken;
//the above line works too after export prefix is removed from refershToken function
