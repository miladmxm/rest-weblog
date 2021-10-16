import React from "react";
import { localhost } from '../../../../services/config.json'
import { Link } from 'react-router-dom'
const PostCart = ({ thumbnail, body, title, fullname, createdAt }) => {
   
    return (
        <>
            <article className="postCart">
                <img src={`${localhost}/uploads/thumbnails/${thumbnail}`} alt={`${localhost}/uploads/thumbnails/${thumbnail}`} />
                <div className="main">
                    <h2>{title} </h2>
                    <div className="bodyPost minImg" dangerouslySetInnerHTML={{ __html: body }}>
                      
                    </div>
                    <Link className="readMore" to="/single/15sdasf5d36h8rs">خوندن ادامه</Link>
                </div>
                <footer>
                    <span>تاریخ انتشار : { createdAt}</span>
                    <span>نویسنده : {fullname }</span>

                </footer>
            </article>


        </>
    )
}
export default PostCart