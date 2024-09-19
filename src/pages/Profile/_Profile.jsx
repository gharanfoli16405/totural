import { GetUser } from "apis/Profile";
import { useEffect, useReducer } from "react";
import {
  getDataStart,
  getDataSuccess,
  getDataFailure,
} from "reducers/dataLoader/DataLoaderAction";

import {
  dataReducer,
  initialState,
} from "reducers/dataLoader/DataLoaderReducer";
const Profile = () => {
  const [state, dispatch] = useReducer(dataReducer, initialState);

  console.log("state", state);

  useEffect(() => {
    dispatch(getDataStart());
    GetUser()
      .then((res) => {
        dispatch(getDataSuccess(res));
      })
      .catch(() => dispatch(getDataFailure()));
  }, []);

  return (
    <>
      <div>Profile page dsd</div>
    </>
  );
};

export default Profile;
