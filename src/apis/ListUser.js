import axios from "axios";
import baseUrl, { urls } from "constant/reqRes";

const ListUserLoader = async () => {
  const url = baseUrl + urls.listUsers;
  const data = await axios.get(url);
  return data;
};

export { ListUserLoader };
