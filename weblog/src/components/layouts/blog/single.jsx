import React, { useEffect, useState } from "react";
import { localhost } from "../../../services/config.json";
import { formatDate } from "../../utils/jalali";
import { Helmet } from "react-helmet";
import { getSinglePosts } from "../../../services/blogServises";
import SideBar from "./common/sideBar";

const Single = ({ match, history }) => {
  const [post, setPost] = useState({});
  

  useEffect(async () => {
    try {
      const newpost = await getSinglePosts(match.params.id);
      if (newpost.status === 200) {
        setPost(newpost.data.post);
      } else {
        history.replace("/404");
      }
    } catch (ex) {
      history.replace("/404");
      console.log(ex);
    }
  }, [match.params.id]);
  return (
    <>
      <Helmet>
        <title>وبلاگ | {post.title ? post.title : "پست تکی"}</title>
      </Helmet>
      <div style={{ marginTop: "60px" }}></div>
      <section className="display_flex">
        <article className="postCart w-70">
          <img src={`${localhost}/uploads/thumbnails/${post.thumbnail}`} />
          <div className="main">
            <h2>{post.title}</h2>
            <div
              className="bodyPost"
              dangerouslySetInnerHTML={{ __html: post.body }}
            ></div>
          </div>
          <footer>
            <span>تاریخ انتشار: {formatDate(post.createdAt)}</span>
            <span>دسته بندی : {post.category}</span>
            <span>نویسنده: {post.user ? post.user.fullname : null} </span>
          </footer>
        </article>
        <SideBar user_id={match.params.id} post={post} />
      </section>

      <div className="postCart">
        <form className="Comments" action="#">
          <input type="email" name="email" id="email" placeholder="ایمیل شما" />
          <textarea
            name="Comment"
            id="Comment"
            placeholder="نظر شما در رابطه با این پست"
          ></textarea>
          <button type="button">ارسال نظر</button>
        </form>
      </div>
    </>
  );
};
export default React.memo(Single);
