import { combineReducers } from 'redux';
import homeReducer from './homeReducer'
import favoritesReducer from './favoritesReducer';

const rootReducer = combineReducers({
    homeReducer: homeReducer,
    favoritesReducer: favoritesReducer,
})

export default rootReducer;