import { useEffect, useState } from "react";
import Avatar from "./Avatar";
import ManAvatar from "../assets/men-avatar.jpg";
import usersData from "../assets/data/users.json";
import Profile from "./Profile";
function UserList({ search }) {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  // API fetch
  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setUsers(data);
  //       setLoading(false);
  //     })
  //     .catch(() => {
  //       setLoading(false);
  //       console.log("Error fetching data");
  //     });
  // }, []);
  useEffect(() => {
    setTimeout(() => {
      // Fetch users list from mock
      setUsers(usersData);
      setLoading(false);
    }, 1000);
  }, []);
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes((search || "").toLowerCase())
  );
  if (loading)
    return (
      <div className="loading-container">
        <p>Loading users...</p>
      </div>
    );
  return (
    <div className="user-container">
      {/* render dynamic UI */}
      {filteredUsers.length !== 0 ? (
        filteredUsers.map((user) => <Profile key={user.id} user={user} />)
      ) : (
        <div className="no-users">
          <p>No users found</p>
        </div>
      )}
    </div>
  );
}
export default UserList;
