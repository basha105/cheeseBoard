import { React, useEffect, useState } from 'react'

function App() {

  const [users, setUsers] = useState(null)

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch("http://localhost:3000");
        const data = await res.json();
        setUsers(data.users);
      } catch (err) {
        console.error("error fetching users", err);
      }
    }
    fetchUsers();
  }, []);

  return (
    <>
    <h1>Data:</h1>
    {!users ? (
      <div>Loading...</div>
    ) : (
      <ul>
        {users.map((user) =>
        <li key={user.id}>{user.name}</li>
      )}
      </ul>
    )}
    </>
  );
}

export default App