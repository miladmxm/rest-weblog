import React, { useState } from "react";
import SearchForm from "./search";


const HeaderBlog = () => {
    const [activedToggleBtn, setActivedToggleBtn] = useState(false)
    const toggleMenu = (e) => {
        setActivedToggleBtn(!activedToggleBtn)
    }
    return (
        <div className="fixed-top">
            <div className="navbar">
                <div className="container">
                    <h2 className="logo"><a className='text-initial' href="/">Milad MXM</a></h2>
                    <button className={activedToggleBtn ? "toggle toggler" : "toggle"} onClick={toggleMenu}>
                        <span></span>
                    </button>

                    <nav id="navMenu" className={activedToggleBtn ? "showNav" : ""}>
                        <ul>
                            <li><a className="active" href="/">خانه</a></li>

                            <li><a href="/dashboard">پنل کاربری</a></li>
                            <li><a href="/users/logout">خروج</a></li>

                            <li>
                                <a className="" href="/users/login">ورود</a>
                            </li>
                            <li>
                                <a href="/users/register">ثبت نام</a>
                            </li>
                            <li>
                                <a className="<%= path == '/contact'? 'active' : ''%>" href="/contact">تماس با ما</a>
                            </li>
                            <li>
                                <SearchForm />
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>

    )
}
export default HeaderBlog