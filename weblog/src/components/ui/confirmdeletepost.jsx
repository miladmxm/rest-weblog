import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ContextDash } from "../context/context";
import { findPost } from "../utils/findPost";
import { localhost } from "../../services/config.json";
import { deletePost } from "../../services/dashServises";
import { getDashboard } from "../../action/dashboard";

const ConfirmDeletePost = ({ history }) => {
  const contextx = useContext(ContextDash);
  const { confirmPost, setConfirmPost, setDropShadowToggle, setZindexShadow } =
    contextx;
  const posts = useSelector((state) => state.getDashboard);
  const dispatch = useDispatch();
  if (confirmPost.length > 5) {

    const post = findPost(confirmPost, posts)[0];
    setDropShadowToggle(true);
    setZindexShadow(151);

    const deletePosthandler = async () => {
      try {
        const data = await deletePost(confirmPost);
        console.log(data);
        if (data.status === 200) {
          dispatch(getDashboard());
          history.replace("/dashboard/");
        }
      } catch (ex) {
        if (ex.response) {
          console.log(ex.response);
        }
      }
      setConfirmPost("");
      setDropShadowToggle(false);
      setZindexShadow(100);
    };

    return (
      <div className="boxConfirm">
        <div className="conteiner">
          <div className="center">
            <h3>آیا اطمینان داری که میخوای پست '{post.title}' رو پاک کنی؟</h3>
          </div>
          <div className="row">
            <img
              className="imgSingle"
              src={`${localhost}/uploads/thumbnails/${post.thumbnail}`}
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
              setConfirmPost("");
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

export default ConfirmDeletePost;
