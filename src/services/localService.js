import StorageService from "./StorageService"


export default {
    query,
    save,
    remove,
    get
}

function query() {
    const favorites = StorageService.query('favorites')
    if (favorites.length === 0) {
        return StorageService.postMany('favorites', favorites)
    } else {
        return favorites
    }
}

function get(cityKey) {
    return StorageService.get('favorites', cityKey)
}

function remove(favoriteKey) {
    return StorageService.remove('favorites', favoriteKey)
}

function save(favorite) {
    return StorageService.post('favorites', favorite)
}
