import { getAllPosts } from "../services/dashServises"

export const getDashboard = (id) => {
    return async dispatch => {
        try {
            const posts = await getAllPosts(id)
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