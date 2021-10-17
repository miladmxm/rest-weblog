import { getAllPosts } from "../services/blogServises"

export const getBlog = () => {
    return async dispatch => {
        try {
            const posts = await getAllPosts()
            
            await dispatch({ type:"ADD_ALL_POSTS",payload:posts.data.posts})
        } catch (err) {
            console.log(err);
        }
        
    }
}