import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserList = () => {
  const [listOfUsers, setListOfUsers] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setListOfUsers(response.data);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  }, []);

  return (
    <div>
      <h2>User List</h2>
      {listOfUsers.length > 0 ? (
        <ul>
          {listOfUsers.map(user => (
            <li key={user.id}>
              <strong>Name:</strong> {user.name}<br />
              <strong>Email:</strong> {user.email}<br />
              <strong>Username:</strong> {user.username}
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading users...</p>
      )}
    </div>
  );
};

export default UserList;
