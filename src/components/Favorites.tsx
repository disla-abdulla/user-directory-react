import { useContext } from "react";
import Profile from "./Profile";
import { FavoriteContext } from "../context/FavoriteContext";
function Favorites() {
  const { favorites } = useContext(FavoriteContext);
  return (
    <div className="favorite-container">
      <h1 className="app-heading">Favorite Users</h1>
      <div className="user-container">
        {favorites?.length > 0 ? (
          favorites.map((user) => <Profile key={user.id} user={user} />)
        ) : (
          <div className="no-users">
            <p>No favorite users yet ⭐</p>
          </div>
        )}
      </div>
    </div>
  );
}
export default Favorites;
