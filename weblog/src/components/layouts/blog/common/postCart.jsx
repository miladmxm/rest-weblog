import React from "react";
import {Link} from 'react-router-dom'
const PostCart = () => {
    return (
        <>
            <div style={{marginTop:"60px"}}></div>
            <article className="postCart">
                <img src="./img/1.jpg" alt="" />
                <div className="main">
                    <h2> </h2>
                    <div className="bodyPost minImg">


                    </div>
                    <Link className="readMore" to="/blog/">خوندن ادامه</Link>
                </div>
                <footer>
                    <span>تاریخ انتشار : </span>
                    <span>نویسنده :</span>

                </footer>
            </article>
        </>
    )
}
export default PostCart