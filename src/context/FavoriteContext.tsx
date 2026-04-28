import { createContext, useState } from "react";
export const FavoriteContext = createContext(null);

function FavoriteProvider({ children }) {
  const [favorites, setFavorites] = useState([]);
  const addFavorite = (user) => {
    setFavorites((prev) => {
      if (prev.find((u) => u.id === user.id)) return prev;
      return [...prev, user];
    });
  };
  const removeFavorite = (id) => {
    setFavorites((prev) => prev.filter((u) => u.id !== id));
  };
  const isFavorite = (id) => {
    return favorites.some((u) => u.id === id);
  };
  return (
    <FavoriteContext.Provider
      value={{ favorites, addFavorite, removeFavorite, isFavorite }}
    >
      {children}
    </FavoriteContext.Provider>
  );
}
export default FavoriteProvider;
