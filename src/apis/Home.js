import axios from "axios";
import baseUrl, { urls } from "constant/reqRes";

const HomeLoader = async () => {
  const url = baseUrl + urls.singleUser;
  const data = await axios.get(url);
  return data;
};
// const HomeLoader = async () => {
//   const res = await axios.get(baseUrl + urls.singleUser);
//   return await res;
// };

// const HomeLoader = async () => {
//   try {
//     const res = await axios.get(baseUrl + urls.singleUser);
//     return await res;
//   } catch (error) {
//     // Handle errors
//   }
// };

// export const getData = async () => {
//   const response = await axios.get(
//     `https://famous-quotes4.p.rapidapi.com/random`
//   );
// };

export { HomeLoader };
