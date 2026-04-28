import { useContext } from "react";
import { FavoriteContext } from "../context/FavoriteContext";

function useFavorite(user) {
  const { addFavorite, removeFavorite, isFavorite } =
    useContext(FavoriteContext);
  const favorite = user ? isFavorite(user.id) : false;
  const toggleFavorite = () => {
    if (favorite) {
      removeFavorite(user.id);
    } else {
      addFavorite(user);
    }
  };
  return { favorite, toggleFavorite };
}
export default useFavorite;
