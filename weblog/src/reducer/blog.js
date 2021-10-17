export const getBlogReducer = (state=[],action) => {
    switch (action.type) {
        case 'ADD_ALL_POSTS':
            return [...action.payload]
        default:
            return state
    }
}