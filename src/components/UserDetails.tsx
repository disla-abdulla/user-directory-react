import { useNavigate, useParams } from "react-router-dom";
import Avatar from "./Avatar";
import usePageTitle from "../hooks/usePageTitle";
import useFetch from "../hooks/useFetch";
import useFavorite from "../hooks/useFavorite";
import starred from "../assets/images/star.png";
import unStarred from "../assets/images/favorite.png";
function UserDetails() {
  const navigate = useNavigate();
  const { id } = useParams();
  // using custom hook for displaying tab name
  const apiData = useFetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const user = apiData.fetchedData;
  const loading = apiData.loading;
  const error = apiData.error;
  // using custom hook for adding/removing user as favorite
  const { favorite, toggleFavorite } = useFavorite(user);
  // custom hook for displaying dynamic document tab name
  usePageTitle(`User Details/${user?.name}`);
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
      <button className="favorite-icon" onClick={toggleFavorite}>
        {" "}
        <img
          className={favorite ? "favIconStar" : ""}
          src={favorite ? starred : unStarred}
          alt="favorite"
          width={15}
          height={15}
        />
      </button>
      <Avatar
        imageId={user?.id}
        altName={user?.name}
        classNames={"details-avatar"}
      />
      <h2>{user?.name}</h2>
      <p>
        <strong>User Name:</strong>
        {user?.username}
      </p>
      <p>
        <strong>Email:</strong>
        {user?.email}
      </p>
      <p>
        <strong>Phone:</strong>
        {user?.phone}
      </p>
      <p>
        <strong>Street:</strong>
        {user?.address?.street}
      </p>
      <p>
        <strong>City:</strong>
        {user?.address?.city}
      </p>
    </div>
  );
}
export default UserDetails;
