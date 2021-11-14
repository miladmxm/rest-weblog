const allUserReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_ALL_USERS':
            return [...action.payload ]
        case 'CLEAR_ALL_USERS':
            return [ ...action.payload ]
        default:
            return state
    }
}
export default allUserReducer