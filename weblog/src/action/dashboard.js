import { getAllPosts } from "../services/dashServises";

export const getDashboard = () => {
  return async (dispatch, getState) => {
    try {
      const user = getState().userHandler
      const posts = await getAllPosts(user.userId)

      if (posts) {
        await dispatch({ type: "ADD_POSTS_DASHBOARD", payload: posts.data.posts });
      }
    } catch (err) {
      if (err) {
        if (err.response) {

          if (err.response.status === 401) {
            localStorage.removeItem("token")
            await dispatch({ type: "DELETE_USER", payload: {} })
            await dispatch({ type: "ADD_POSTS_DASHBOARD", payload: [] });
            window.location.reload();

          }
          console.log(err.response);

        }
      }

    }
  };
};

export const cleareDash = () => {
  return async (dispatch) => {
    await dispatch({ type: "ADD_POSTS_DASHBOARD", payload: [] });
  };
};
