import { useEffect, useState } from "react";
import Profile from "./Profile";
function UserList({ search }) {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  // API fetch
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
        setError(true);
      });
  }, []);
  // Fetch users list from mock
  // useEffect(() => {
  //   setTimeout(() => {
  //     setUsers(usersData);
  //     setLoading(false);
  //   }, 1000);
  // }, []);
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes((search || "").toLowerCase())
  );
  if (loading)
    return (
      <div className="loading-container">
        <p>Loading users...</p>
      </div>
    );
  if (error)
    return (
      <div className="loading-container">
        <p>Something went wrong while fetching users list...</p>
      </div>
    );
  return (
    <div className="user-container">
      {/* render dynamic UI */}
      {filteredUsers.length !== 0 ? (
        filteredUsers.map((user) => <Profile key={user.id} user={user} />)
      ) : (
        <div className="no-users">
          <p>No users found for {search}</p>
        </div>
      )}
    </div>
  );
}
export default UserList;
