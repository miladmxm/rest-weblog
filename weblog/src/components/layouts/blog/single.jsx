import React, { useEffect, useRef, useState } from "react";
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
import Slider from "../../ui/slider";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Single = ({ match, history }) => {
  const [post, setPost] = useState({});
  const [divice, setDivice] = useState('web')

  const posts = useSelector(state => state.getBlog)

  const [show, setShow] = useState(false)

  const drop = useRef(null)

  const togge = () => {
    setShow(!show)
    if (!show) {
      drop.current.style.height = drop.current.scrollHeight + 'px'
    } else {

      drop.current.style.height = "124px"
    }
  }

  useEffect(async () => {

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      setDivice('api')
    } else {
      setDivice('web')
    }
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
            <span>نویسنده: {post.user ? post.user.fullname : null} </span>
          </footer>
        </article>
        <aside className="asideSinglePost w-30">
          <div className="container-aside">

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
            <span className="br" />
            <h3 className="m3">درباره نویسنده <i className="fa fa-pencil"></i></h3>
            {post.user ? <>
              <div className="dropBox" style={{ height: "124px", padding: '0' }} ref={drop}>
                <div className="writer">
                  <div className="row" onClick={togge} >
                    <img className="profileImg" src={`http://localhost:4000/uploads/${post.user.profileImg == "default" ? 'user.png' : `image/${post.user.profileImg}`}`} />
                    <div className="column userNameInWriter">
                      <h4>{post.user.fullname}</h4>
                      <small>{post.user.skill}</small>
                    </div>
                  </div>
                  <div className="column">
                    <p>
                      {post.user.bio}
                    </p>
                  </div>
                  <div className="column">
                    <h4 className="h3">
                      راه های ارتباط با من
                    </h4>
                    <div className="mysocial">
                      <a target="_blank" href={`https://${divice}.whatsapp.com/send?phone=989911002025`}><WhatsappIcon size={40} round={true} /></a>
                      <a target="_blank" href={`mailto:${post.user.email}`}><EmailIcon size={40} round={true} /></a>
                      <a target="_blank" className="phone" href={`tel:09109662449`}><i className="fa fa-phone"></i></a>
                      <a target="_blank" className="insta" href={`https://www.instagram.com/maryam__9018/`}><i className="fa fa-instagram"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </> : null}

            <span className="br" />
            <h3 className="m3">پست های مرتبط</h3>
            <Slider responsive={[4, 3, 3, 2]}>
              {posts.map(pos => {
                return (
                  <Link to={`/single/${pos._id}`} className="slidItem row">
                    <img className="imgSlider" src={`${localhost}/uploads/thumbnails/${pos.thumbnail}`} />
                    <small>{pos.title}</small>
                  </Link>
                )
              })}
            </Slider>
          </div>
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
