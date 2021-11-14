import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ContextDash } from "../context/context";
import { findPost } from "../utils/findPost";
import { localhost } from "../../services/config.json";
import { deleteUserByAdmin } from "../../services/dashServises";
import { getAllUsers } from "../../action/allUsers";

const ConfirmDeleteUser = ({ history }) => {
  const { confirmUser, setConfirmUser, setDropShadowToggle, setZindexShadow } = useContext(ContextDash);
  const admin = useSelector((state) => state.userHandler);
  const users = useSelector((state) => state.allUsers);
  const dispatch = useDispatch();
  if (confirmUser.length > 5 && admin.dadashami === "dada") {

    const user = findPost(confirmUser, users)[0];
    console.log(user);
    setDropShadowToggle(true);
    setZindexShadow(151);

    const deletePosthandler = async () => {
      try {
        const data = await deleteUserByAdmin(confirmUser);
        if (data.status === 200) {
          dispatch(getAllUsers());
          history.replace("/dashboard/users");
        }
      } catch (ex) {
        console.log(ex.response);
      }
      setConfirmUser("");
      setDropShadowToggle(false);
      setZindexShadow(100);
    }
    
    return (
      <div className="boxConfirm">
        <div className="conteiner">
          <div className="center">
            <h3>آیا اطمینان داری که میخوای پست '{user.fullname}' رو پاک کنی؟</h3>
          </div>
          <div className="row">
            <img
              className="imgSingle"
              src={`${localhost}/uploads/${user.profileImg == "default"?'user.png' : `image/${user.profileImg}`}`}
            />
          </div>
        </div>
        <div className="center">
          <button className="btn btn-denger" onClick={deletePosthandler}>
            {" "}
            تایید{" "}
          </button>
          <button
            className="btn btn-success"
            onClick={() => {
              setConfirmUser("");
              setDropShadowToggle(false);
            }}
          >
            {" "}
            کنسل{" "}
          </button>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default ConfirmDeleteUser;
