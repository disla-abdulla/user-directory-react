import Avatar from "./Avatar";
import { useNavigate } from "react-router-dom";
function Profile({ user }) {
  const navigate = useNavigate();
  return (
    <div className="user-card" onClick={() => navigate(`/user/${user.id}`)}>
      <Avatar imageId={user.id} altName={user.name} classNames={"avatar"} />
      <h3>{user.name}</h3>
      <h4>{user.email}</h4>
      <p>{user.address?.street}</p>
    </div>
  );
}
export default Profile;
