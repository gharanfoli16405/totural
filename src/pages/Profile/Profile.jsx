import React from "react";
import { students } from "constant/users";
import { useState } from "react";

const Profile = () => {
  const [data, setData] = useState(students);

  const handleDelete = (id) => {
    const filterData = data.filter((item) => item.id !== id);
    setData(filterData);
  };

  return (
    <>
      <div className="border border-b-orange-700">students List</div>
      <div className="my-4">
        <input type="text" />
        <button className="bg-blue-700 text-white p-3 mx-6">add</button>
      </div>

      <ul>
        {data.length > 0 &&
          data.map(({ name, id }) => (
            <div className="flex items-center mb-5 px-3 w-1/2 justify-between">
              <li key={id}>{name}</li>
              <button
                className="bg-red-700 text-white p-3 mx-6"
                onClick={() => handleDelete(id)}
              >
                remove
              </button>
            </div>
          ))}
      </ul>
    </>
  );
};

export default Profile;
