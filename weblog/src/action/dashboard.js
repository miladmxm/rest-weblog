import { getAllPosts } from "../services/dashServises"

export const getDashboard = () => {
    return async dispatch => {
        try {
            const posts = await getAllPosts()
            console.log(posts);
            await dispatch({ type:"ADD_POSTS_DASHBOARD",payload:posts.data.posts})
        } catch (err) {
            console.log(err);
        }
        
    }
}