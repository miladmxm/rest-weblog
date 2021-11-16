import { decodedToken } from "../components/utils/decodedToken";
import { isUserForUp } from "../services/blogServises";
import { cleareDash, getDashboard } from "./dashboard";

export const addUser = (user) => {
  return async (dispatch) => {
    await dispatch({ type: "ADD_USER", payload: user });
  };
};

export const updateUser = () => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    try {
      
      const { data, status } = await isUserForUp(token);
  
      if (status === 200) {
        localStorage.setItem("token", data.token);
        const { payload } = decodedToken(data.token);
        await dispatch({ type: "ADD_USER", payload: payload.user });
        await dispatch(getDashboard());
      } else {
        localStorage.removeItem("token");
        dispatch(deleteUser());
        dispatch(cleareDash());
      }
    } catch (ex) {
      console.log(ex.data);
      localStorage.removeItem("token");
        dispatch(deleteUser());
        dispatch(cleareDash());
    }
  };
};

export const deleteUser = () => {
  return async (dispatch) => {
    await dispatch({ type: "DELETE_USER", payload: {} });
  };
};
