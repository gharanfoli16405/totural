// import axios from "axios";
// import baseUrl, { urls } from "constant/reqRes";

// export const getData = () => {
//   axios.get(baseUrl + urls.listUsers).then((res) => {
//     return res.data;
//   });
// };

// export const getData = async () => {
//   const res = await axios.get(baseUrl + urls.singleUserNotFound);
//   return await res;
// };

// export const getData = async () => {
//   try {
//     const res = await axios.get(baseUrl + urls.singleUserNotFound);
//     return await res;
//   } catch (error) {
//     console.log("catch", error.response.status);
//     // console.log("Error fetching data:", error.response.status);
//   }
// };

// catch , errorHandeling

export { default } from "./AboutUs";
