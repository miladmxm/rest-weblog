import { httpgetAllUsers } from "../services/dashServises"

export const getAllUsers = () => {
    return async (dispatch, getState) => {
        const user = getState().userHandler
        try {
            
            if (user.dadashami === "dada") {
                const users = await httpgetAllUsers()
                console.log(users);
                if (users.status === 200) {  
                    await dispatch({type:'SET_ALL_USERS',payload:users.data.allUser})        
                } else {
                    const error = new Error('خطا در گرفتن کاربران')
                    throw error
                }
            }
        } catch (ex) {
            console.log(ex);
        }
    }
}

export const clearAllUsers = () => {
    return async dispatch => {
       await dispatch({type:'CLEAR_ALL_USERS',payload:[]})
        
    }
}