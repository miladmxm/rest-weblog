
export const addUser = (user) => {
    return async dispatch => {
       await dispatch({type:'ADD_USER',payload:user})        
    }
}

export const deleteUser = () => {
    return async dispatch => {
       await dispatch({type:'DELETE_USER',payload:{}})
        
    }
}