import React from "react";
import { localhost } from '../../../../services/config.json'
import { Link } from 'react-router-dom'
import { truncate } from "../../../utils/truncate";
import { formatDate } from "../../../utils/jalali";
const PostCart = ({ thumbnail,id, body, title, fullname, createdAt }) => {
   
    return (
        <>
            <article className="postCart">
                <img src={`${localhost}/uploads/thumbnails/${thumbnail}`} alt={`${localhost}/uploads/thumbnails/${thumbnail}`} />
                <div className="main">
                    <h2>{title} </h2>
                    <div className="bodyPost minImg">
                        {truncate(body,200)}
                    </div>
                    <Link className="readMore" to={`/single/${id}`}>خوندن ادامه</Link>
                </div>
                <footer>
                    <span>تاریخ انتشار : {formatDate(createdAt)}</span>
                    <span>نویسنده : {fullname }</span>

                </footer>
            </article>


        </>
    )
}
export default PostCart