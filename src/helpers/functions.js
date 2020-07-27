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


export const debounce = (func, wait) => {
  let timeout;
  
  return function executedFunction(...args) {
    const later = () => {
      timeout = null;  
      func(...args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};