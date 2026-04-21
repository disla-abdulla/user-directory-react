import { useNavigate, useParams } from "react-router-dom";
import Avatar from "./Avatar";
import { useEffect, useState } from "react";
function UserDetails() {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.error(err);
        setError(true);
      });
  }, []);
  if (loading)
    return (
      <div className="loading-container">
        <p>Loading user details...</p>
      </div>
    );
  if (error)
    return (
      <div className="loading-container">
        <p>Something went wrong while fetching user details...</p>
      </div>
    );
  if (!user) return <p className="loading-container">No user Found</p>;
  return (
    <div className="details-container">
      <button className="back-btn" onClick={() => navigate("/")}>
        ← Back
      </button>
      <Avatar
        imageId={user.id}
        altName={user.name}
        classNames={"details-avatar"}
      />
      <h2>{user.name}</h2>
      <p>
        <strong>User Name:</strong>
        {user.username}
      </p>
      <p>
        <strong>Email:</strong>
        {user.email}
      </p>
      <p>
        <strong>Phone:</strong>
        {user.phone}
      </p>
      <p>
        <strong>Street:</strong>
        {user.address?.street}
      </p>
      <p>
        <strong>City:</strong>
        {user.address?.city}
      </p>
    </div>
  );
}
export default UserDetails;
