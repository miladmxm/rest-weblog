export const getDashboard = (posts) => {
  //  console.log(posts);
  return async (dispatch) => {
    await dispatch({ type: "ADD_POSTS_DASHBOARD", payload: posts });
  };
};

export const cleareDash = () => {
  return async (dispatch) => {
    console.log("cle");
    await dispatch({ type: "ADD_POSTS_DASHBOARD", payload: [] });
  };
};
