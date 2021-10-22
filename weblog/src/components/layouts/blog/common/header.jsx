import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import isEmpty from "../../../utils/isEmpty";
import SearchForm from "./search";


const HeaderBlog = () => {
    const user = useSelector(state => state.userHandler)
    const [empty, setEmpty] = useState(isEmpty(user))
    useEffect(() => {
        setEmpty(isEmpty(user))
    },[user])
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
                            <li><NavLink exact to="/">خانه</NavLink></li>
                            {!empty ? (
                                <>
                                    <li>
                                        <NavLink to="/login">ورود</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/register">ثبت نام</NavLink>
                                    </li>
                                </>
                            ) : (
                                <>
                                    <li><NavLink to="/dashboard">پنل کاربری</NavLink></li>
                                    <li><NavLink to="/logout">خروج</NavLink></li>
                                </>
                            )}


                            <li>
                                <NavLink to="/contact">تماس با ما</NavLink>
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