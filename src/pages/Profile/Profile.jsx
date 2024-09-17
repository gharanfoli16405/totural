import { useState, useEffect } from "react";
import { GetUser } from "apis/Profile";

const Profile = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    GetUser()
      .then((res) => {
        const {
          data: { data },
        } = res;
        setData(data);
      })
      .catch((e) => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
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
