export const getDashboardReducer = (state=[],action) => {
   
   
   
    console.log("redu",action.payload)
    switch (action.type) {
        case 'ADD_POSTS_DASHBOARD':
            return [...action.payload]
        default:
            return state
    }
}