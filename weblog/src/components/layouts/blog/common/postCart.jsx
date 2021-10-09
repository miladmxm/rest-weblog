import React from "react";
import { Link } from 'react-router-dom'
const PostCart = () => {
    return (
        <>
            <div style={{ marginTop: "60px" }}></div>
            <article className="postCart">
                <img src="./img/1.jpg" alt="" />
                <div className="main">
                    <h2> lorem ipsom </h2>
                    <div className="bodyPost minImg">
                        Fugiat incididunt pariatur fugiat quis occaecat ullamco ex est aliqua. Proident proident dolor eu anim. Sint ut qui voluptate aliquip elit exercitation pariatur nostrud enim aute esse proident. Do id reprehenderit excepteur incididunt tempor deserunt consequat adipisicing.
                        Cupidatat in non sint aliqua aute. Incididunt nostrud exercitation ad nulla duis anim proident exercitation. Excepteur labore duis Lorem culpa dolor sit esse anim voluptate ea non enim. Id elit do cupidatat pariatur laborum laborum exercitation minim.
                        Nisi et irure cupidatat ullamco aliquip adipisicing tempor commodo fugiat quis nostrud Lorem. Eiusmod elit et cupidatat voluptate qui laboris eu culpa ipsum non esse velit. Do deserunt commodo Lorem nisi voluptate enim ipsum fugiat cupidatat dolore. Quis mollit incididunt nostrud magna sunt veniam commodo in consectetur tempor dolore...
                    </div>
                    <Link className="readMore" to="/single/15sdasf5d36h8rs">خوندن ادامه</Link>
                </div>
                <footer>
                    <span>تاریخ انتشار : 12 دی 1400</span>
                    <span>نویسنده : میلاد حسیبی</span>

                </footer>
            </article>
        </>
    )
}
export default PostCart