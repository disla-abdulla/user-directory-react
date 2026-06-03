import { useContext } from "react";
import { FavoriteContext } from "../context/FavoriteContext";
import { useNavigate } from "react-router-dom";
import FavIcon from "../assets/images/star.png";
function Navbar() {
  const navigate = useNavigate();
  const { favorites } = useContext(FavoriteContext);
  const favoriteCount = favorites?.length || 0;
  return (
    <div className="navbar">
      <h2 className="logo" onClick={() => navigate("/")}>
        User Directory
      </h2>
      <button onClick={() => navigate("/favorites")} className="favorites-btn">
        <img src={FavIcon} width={10} height={10} />
        Favorites<span className="badge">{favoriteCount}</span>
      </button>
      <button onClick={() => navigate("/add-user")}> Add User</button>
    </div>
  );
}
export default Navbar;
