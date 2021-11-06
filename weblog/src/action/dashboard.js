import { getAllPosts } from "../services/dashServises";

export const getDashboard = () => {
  return async (dispatch, getState) => {
    const user = getState().userHandler
    console.log(user);
    const posts = await getAllPosts(user.userId)
    console.log(posts);
    if (posts) {
      
      await dispatch({ type: "ADD_POSTS_DASHBOARD", payload: posts.data.posts });
    } else {
      console.log(posts);
    }
  };
};

export const cleareDash = () => {
  return async (dispatch) => {
    console.log("cle");
    await dispatch({ type: "ADD_POSTS_DASHBOARD", payload: [] });
  };
};
