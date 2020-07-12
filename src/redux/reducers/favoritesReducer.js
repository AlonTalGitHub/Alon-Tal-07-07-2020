const initialState = []

const favorites = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_FAVORITE':
            return state
        case 'REMOVE_FAVORITE':
            return state
        default:
            return state
    }
}

export default favorites;