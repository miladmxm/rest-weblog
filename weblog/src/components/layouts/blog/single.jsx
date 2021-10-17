import React from "react";
import { useSelector } from "react-redux";
import { findPost } from "../../utils/findPost";
import { localhost } from "../../../services/config.json"
const Single = (props) => {

    const posts = useSelector(state => state.getBlog)
    const { thumbnail, body, title, user, createdAt } = findPost(props.match.params.id, posts)[0]

    return (
        <>
            <div style={{ marginTop: "60px" }}></div>
            <article className="postCart w-100">
                <img src={`${localhost}/uploads/thumbnails/${thumbnail}`} />
                <div className="main">
                    <h2>{title}</h2>
                    <div className="bodyPost">
                        {body}
                    </div>
                </div>
                <footer>
                    <span>تاریخ انتشار: { createdAt}</span>
                    <span>نویسنده: {user.fullname} </span>
                </footer>
            </article>

            <div className="postCart">
                <form className="Comments" action="#">
                    <input type="email" name="email" id="email" placeholder="ایمیل شما" />
                    <textarea name="Comment" id="Comment" placeholder="نظر شما در رابطه با این پست"></textarea>
                    <button type="button">ارسال نظر</button>
                </form>
            </div>
        </>
    )
}
export default Single