import { getAllPosts } from "../services/dashServises"

export const getDashboard = (id,tk) => {
    return async dispatch => {
        try {
            const posts = await getAllPosts(id,tk)
            await dispatch({ type:"ADD_POSTS_DASHBOARD",payload:posts.data.posts})
        } catch (err) {
            console.log(err);
        }
        
    }
}

export const cleareDash = ()=>{
    return async dispatch =>{
        console.log("cle");
        await dispatch({ type:"ADD_POSTS_DASHBOARD",payload:[]})
    }
}