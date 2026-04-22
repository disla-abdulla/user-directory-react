import Profile from "./Profile";
import useFetch from "../hooks/useFetch";
function UserList({ search }) {
  // API fetch using custom hook
  const { fetchedData, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );
  const filteredUsers = fetchedData.filter((user) =>
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
