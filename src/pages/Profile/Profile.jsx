import { useReducer, useEffect } from "react";
import { GetUser } from "apis/Profile";
import {
  dataLoaderReducer,
  initialState,
} from "reducers/dataLoader/dataLoaderReducer";
import {
  getDataStart,
  getDataSuccess,
  getDataFailure,
} from "reducers/dataLoader/dataLoadderAction";

const Profile = () => {
  const [state, dispatch] = useReducer(dataLoaderReducer, initialState);

  const { loading, data, error } = state;
  console.log("state", state);

  useEffect(() => {
    dispatch(getDataStart());
    GetUser()
      .then((res) => {
        const {
          data: { data },
        } = res;
        dispatch(getDataSuccess(data));
      })
      .catch((e) => {
        dispatch(getDataFailure(data));
      });
  }, []);

  return loading ? (
    <p> is Loading</p>
  ) : (
    <>
      {error ? (
        <p> Opps ....</p>
      ) : (
        <div>
          <figure>
            <img src={data.avatar} alt="" />
          </figure>
          <span> {data.first_name} </span>
          <span> {data.last_name} </span>
        </div>
      )}
    </>
  );
};

export default Profile;
