import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ContextDash } from "../context/context";
import { findPost } from "../utils/findPost";
import { localhost } from "../../services/config.json";
import { deletePost } from "../../services/dashServises";
import { getDashboard } from "../../action/dashboard";

const Confirm = ({ history }) => {
  const contextx = useContext(ContextDash);
  const { confirm, setConfirm, setDropShadowToggle, setZindexShadow } =
    contextx;
  const posts = useSelector((state) => state.getDashboard);
  const dispatch = useDispatch();
  if (confirm.length > 5) {

    const post = findPost(confirm, posts)[0];
    setDropShadowToggle(true);
    setZindexShadow(151);

    const deletePosthandler = async () => {
      try {
        const data = await deletePost(confirm);
        if (data.status == 200) {
          dispatch(getDashboard(posts.user.userId));
          history.replace("/dashboard/");
        }
      } catch (ex) {
        console.table(ex.response);
      }
      setConfirm("");
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
              setConfirm("");
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

export default Confirm;
