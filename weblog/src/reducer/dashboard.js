export const getDashboardReducer = (state=[],action) => {
    switch (action.type) {
        case 'ADD_POSTS_DASHBOARD':
            return [...action.payload]
        default:
            return state
    }
}