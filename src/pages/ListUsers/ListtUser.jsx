import { useState } from "react";

import { students } from "constant/users";

const ListtUser = () => {
  const [users, setUsers] = useState(students);
  const [value, setValue] = useState("");

  const handleAddItem = () => {
    console.log();
    if (!value) return;
    setUsers([...users, { name: value, id: 13 }]);
    setValue("");
  };

  return (
    <>
      <h1 className="border-b-8">In the name of god</h1>
      <div>
        <input
          className="border border-black"
          type="text"
          value={value}
          onChange={({ target }) => setValue(target.value)}
        />
        <button onClick={handleAddItem}>add</button>
      </div>
      {users.length > 0 && (
        <>
          <ul>
            {users.map(({ name, id }) => (
              <li key={id}>{name}</li>
            ))}
          </ul>
        </>
      )}
    </>
  );
};

export default ListtUser;
