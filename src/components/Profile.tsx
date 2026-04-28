import Avatar from "./Avatar";
import { useNavigate } from "react-router-dom";
import starred from "../assets/images/star.png";
import unStarred from "../assets/images/favorite.png";
import useFavorite from "../hooks/useFavorite";
function Profile({ user }) {
  const navigate = useNavigate();
  const { favorite, toggleFavorite } = useFavorite(user);

  return (
    <div
      className={`user-card ${favorite ? "favorited" : ""}`}
      onClick={() => navigate(`/user/${user.id}`)}
    >
      <button
        className="favorite-icon"
        onClick={(e) => {
          // to prevent event bubling issue.
          e.stopPropagation();
          toggleFavorite();
        }}
      >
        <img
          src={favorite ? starred : unStarred}
          alt="favorite"
          width={15}
          height={15}
        />
      </button>
      <Avatar imageId={user.id} altName={user.name} classNames={"avatar"} />
      <h3>{user.name}</h3>
      <h4>{user.email}</h4>
      <p>{user.address?.street}</p>
    </div>
  );
}
export default Profile;
