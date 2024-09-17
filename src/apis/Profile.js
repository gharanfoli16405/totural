import axios from "axios";
import baseUrl, { urls } from "constant/reqRes";

const GetUser = async () => {
  const url = baseUrl + urls.singleUser;
  const data = await axios.get(url);
  return data;
};

export { GetUser };
