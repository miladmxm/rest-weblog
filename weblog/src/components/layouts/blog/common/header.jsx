import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchForm from "./search";


const HeaderBlog = () => {
    const [activedToggleBtn, setActivedToggleBtn] = useState(false)
    const toggleMenu = () => {
        setActivedToggleBtn(!activedToggleBtn)
    }
    return (
        <div className="fixed-top">
            <div className="navbar">
                <div className="container">
                    <h2 className="logo"><Link className='text-initial' to="/">Milad MXM</Link></h2>
                    <button className={activedToggleBtn ? "toggle toggler" : "toggle"} onClick={toggleMenu}>
                        <span></span>
                    </button>

                    <nav id="navMenu" className={activedToggleBtn ? "showNav" : ""}>
                        <ul>
                            <li><Link className="active" to="/">خانه</Link></li>

                            <li><Link to="/dashboard">پنل کاربری</Link></li>
                            <li><Link to="/users/logout">خروج</Link></li>

                            <li>
                                <Link className="" to="/users/login">ورود</Link>
                            </li>
                            <li>
                                <Link to="/users/register">ثبت نام</Link>
                            </li>
                            <li>
                                <Link className="<%= path == '/contact'? 'active' : ''%>" to="/contact">تماس با ما</Link>
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