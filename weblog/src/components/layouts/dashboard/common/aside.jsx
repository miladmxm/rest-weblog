import React, { useState } from "react";
import { Link } from "react-router-dom";

const Aside = () => {
    const [toggleSide ,setToggleSide] = useState(false)
    const sideToggler = () => {
        setToggleSide(!toggleSide)
    }
    return (
        
        <aside className={toggleSide ?"side-bar showSide":"side-bar"}>
        <header>داشبورد وبلاگ <img stc="./img/logo.png" /></header>
        <nav>
            <ul>
                <li>
                    <Link className="active" href="">
                        <i className="fa fa-book"></i>
                        پست ها
                    </Link>
                </li>
                <li>
                    <i className="fa fa-plus"></i>
                    <Link href="">افزودن پست</Link>
                </li>
                <li>
                    <i className="fa fa-cog"></i>
                    <Link href="">تنظیمات حساب</Link>
                </li>
            </ul>
            <i onClick={sideToggler} className="fa fa-cog side-settingShow"></i>
        </nav>
    </aside>
    )
}
export default Aside