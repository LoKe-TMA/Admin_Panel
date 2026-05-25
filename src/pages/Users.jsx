import React, {
  useEffect,
  useState
} from "react";

import { getUsers } from "../api/users";

const Users = () => {
  const [users, setUsers] = useState(
    []
  );

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const data = await getUsers();

    setUsers(data.users);
  };

  return (
    <div className="p-5">
      <h1 className="text-2xl mb-5">
        Users
      </h1>

      {users.map((user) => (
        <div
          key={user._id}
          className="bg-zinc-900 p-4 rounded-xl mb-3"
        >
          <p>{user.username}</p>
          <p>{user.coins}</p>
        </div>
      ))}
    </div>
  );
};

export default Users;
