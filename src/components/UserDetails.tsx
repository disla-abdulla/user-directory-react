import { useNavigate, useParams } from "react-router-dom";
import userData from "../assets/data/users.json";
import Avatar from "./Avatar";
function UserDetails() {
  const navigate = useNavigate();
  const { id } = useParams();
  const user = userData.find((u) => u.id === Number(id));
  if (!user) return <p>No user Found</p>;
  return (
    <div className="details-container">
      <button className="back-btn" onClick={() => navigate("/")}>
        ← Back
      </button>
      <Avatar
        image={user.image}
        altName={user.name}
        classNames={"details-avatar"}
      />
      <h2>{user.name}</h2>
      <p>
        <strong>Email:</strong>
        {user.email}
      </p>
      <p>
        <strong>Street:</strong>
        {user.address?.street}
      </p>
    </div>
  );
}
export default UserDetails;
