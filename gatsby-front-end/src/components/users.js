import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await axios.get("http://localhost:3000/api/users");
      setUsers(res.data);
      console.log("useEffect ran");
    };
    fetchUsers();
  }, []);

  return (
    <div>
      {users.map( user => (
        <div>
          {user.username}
        </div>
      ))}
    </div>
  )

}

export default Users;