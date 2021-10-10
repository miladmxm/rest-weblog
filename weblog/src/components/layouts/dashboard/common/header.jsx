import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchForm from "./search";


const HeaderDash = () => {
    const [activedToggleBtn, setActivedToggleBtn] = useState(false)
    const toggleMenu = () => {
        setActivedToggleBtn(!activedToggleBtn)
    }
    return (
        <div className="dashboard-header">
            <div className="navbar">
                <div className="container">
                    <h2 className="logo"><Link className='text-initial' to="/dashboard">میلاد حسیبی</Link></h2>
                    <button className={activedToggleBtn ? "toggle toggler" : "toggle"} onClick={toggleMenu}>
                        <span></span>
                    </button>

                    <nav id="navMenu" className={activedToggleBtn ? "showNav" : ""}>
                        <ul>
                            <li><Link className="active" to="/dashboard">خانه</Link></li>
                            <li><Link to="/add-post">افزودن پست</Link></li>

                            <li><Link to="/">مشاهده وبلاگ</Link></li>
                            <li><Link to="/login">خروج</Link></li>
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
export default HeaderDash