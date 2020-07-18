import localService from "../services/localService";

export const isFavoriteFound = (city) => {
  const favorites = localService.query()
  for(var i = 0; i < favorites.length; i++) {
      if (city.Key === favorites[i].Key) {
          return true;
      }
  }
  return false;
}