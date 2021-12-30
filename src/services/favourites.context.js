import React, { createContext, useState } from "react";

export const FavouritesContext = createContext();
export const FavouriteContextProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);

  const add = (recipie) => {
    setFavourites([...favourites, recipie]);
  };
  const remove = (recipie) => {
    const newFavourites = favourites.filter(
      (x) => x.placeId !== recipie.placeId
    );
    setFavourites(newFavourites);
  };

  return (
    <FavouritesContext.Provider
      value={{
        favourites: favourites,
        addToFavourites: add,
        removeFromFavourites: remove,
      }}
    >
      {children}
    </FavouritesContext.Provider>
  );
};
