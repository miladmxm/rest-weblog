import React, { useEffect, useState } from "react";
import { localhost } from "../../../services/config.json";
import { formatDate } from "../../utils/jalali";
import { Helmet } from "react-helmet";
import { getSinglePosts } from "../../../services/blogServises";
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";

const Single = ({ match, history }) => {
  const [post, setPost] = useState({});
  useEffect(async () => {
    try {
      const newpost = await getSinglePosts(match.params.id);
      console.log(newpost.data.post);
      if (newpost.status === 200) {
        setPost(newpost.data.post);
      } else {
        history.replace("/404");
      }
    } catch (ex) {
      history.replace("/404");
      console.log(ex);
    }
  }, []);

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
            <span>نویسنده: {post.user ? post.user.fullname : null} </span>
          </footer>
        </article>
        <aside className="asideSinglePost w-30">
        <div className="w-70">
        <h3 className="m3">اشتراک گذاری در <i className='fa fa-share-alt'></i></h3>
          <div className="display_flex">
            <EmailShareButton
              url={`http://localhost:3000/single/${match.params.id}`}
            >
              <EmailIcon size={40} round={true} />
            </EmailShareButton>
            <FacebookShareButton
              url={`http://localhost:3000/single/${match.params.id}`}
            >
              <FacebookIcon size={40} round={true} />
            </FacebookShareButton>
            <TelegramShareButton
              url={`http://localhost:3000/single/${match.params.id}`}
            >
              <TelegramIcon size={40} round={true} />
            </TelegramShareButton>
            <WhatsappShareButton
              url={`http://localhost:3000/single/${match.params.id}`}
            >
              <WhatsappIcon size={40} round={true} />
            </WhatsappShareButton>
            <TwitterShareButton
              url={`http://localhost:3000/single/${match.params.id}`}
            >
              <TwitterIcon size={40} round={true} />
            </TwitterShareButton>
          </div>
        </div>
        <span className="br"></span>
        <h2>l;kja;s</h2>
        </aside>
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
