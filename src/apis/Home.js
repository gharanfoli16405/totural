import axios from "axios";
import baseUrl, { urls } from "constant/reqRes";
const HomeLoader = async () => {
  try {
    const res = await axios.get(baseUrl + urls.singleUserNotFound);
    return await res;
  } catch (error) {
    // Handle errors
    console.log("Error fetching data:", error.response.status);
  }
};

// export const getData = async () => {
//   const response = await axios.get(
//     `https://famous-quotes4.p.rapidapi.com/random`
//   );
// };

export { HomeLoader };
