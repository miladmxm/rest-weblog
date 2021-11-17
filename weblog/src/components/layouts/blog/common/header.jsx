import React, { useEffect, useState, useRef, useContext } from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import isEmpty from "../../../utils/isEmpty";
import SearchForm from "./search";
import { withRouter } from 'react-router-dom';
import { localhost } from '../../../../services/config.json'
import { ContextDash } from "../../../context/context";


const HeaderBlog = ({ location }) => {
    const user = useSelector(state => state.userHandler)
    const context = useContext(ContextDash)
    const {setIsLight,isLight} = context
    const [empty, setEmpty] = useState(isEmpty(user))
    const [activedToggleBtn, setActivedToggleBtn] = useState(false)
    const [showList, setShowList] = useState(false)
    const navRef = useRef(null)
    useEffect(() => {
        setEmpty(isEmpty(user))
    }, [user])
    useEffect(() => {
        setActivedToggleBtn(false)
        navRef.current.style.height = 0
    }, [location])
    const activeList = () => {
        setShowList(!showList)
    }
    const toggleMenu = () => {
        setActivedToggleBtn(!activedToggleBtn)

        if (!activedToggleBtn) {
            navRef.current.style.height = navRef.current.scrollHeight + 'px';
        } else {
            navRef.current.style.height = 0
        }
    }
    const ligthBack = e => {
        e.target.checked ? document.body.style.backgroundColor = "#fff" : document.body.style.backgroundColor = "";
        setIsLight(e.target.checked)
    }

    return (
        <div className="fixed-top">
            <div className={isLight?"navbar reverscoloe":"navbar"}>
                <div className="container">
                    <div className="display_flex">
                        <input type="checkbox" className="checkedBeautiful descShow darkAndLight" checked={isLight} onChange={(e)=>ligthBack(e)} />
                        <h2 className="logo"><Link className='text-initial' to="/">Milad MXM</Link>
                        </h2>
                    </div>

                    <button className={activedToggleBtn ? "toggle toggler" : "toggle"} onClick={toggleMenu}>
                        <span></span>
                    </button>

                    <nav id="navMenu" ref={navRef} className={activedToggleBtn ? "showNav" : ""}>
                        <ul>


                            {!empty ? (
                                <>
                                    <li><NavLink exact to="/"><i className="fa fa-home"></i> خانه</NavLink></li>
                                    <li><NavLink to="/login"><i className="fa fa-sign-in"></i> ورود</NavLink></li>
                                    <li>
                                        <NavLink to="/register"><i className="fa fa-id-card"></i> ثبت نام</NavLink>
                                    </li>
                                </>
                            ) : (
                                <>
                                    <li><div className="main_profileControll">
                                        <div className="profile-photo" onClick={activeList}>
                                            <img className="profileImg" alt="user profile image" src={`${localhost}/uploads/${user.profileImg === "default" ? 'user.png' : `image/${user.profileImg}`}`} />
                                        </div>
                                        <div className={showList ? "list actove" : "list"}>
                                            <h3>{user.fullname}<br /> <span>{user.skill}</span> </h3>
                                            <span className="br"></span>
                                            <ul>
                                                <li><i className="fa fa-user"></i><Link to="/dashboard">پنل شما</Link></li>
                                                <li><i className="fa fa-plus"></i><Link to="/dashboard/add-post">افزودن پست</Link></li>
                                                <li><i className="fa fa-cog"></i><Link to="/dashboard/setting">تنظیمات و مشخصات</Link></li>
                                                <li><i className="fa fa-sign-out"></i><Link to="/logout">خروج</Link></li>
                                            </ul>
                                        </div>
                                    </div></li>
                                    <li><NavLink exact to="/"><i className="fa fa-home"></i> خانه</NavLink></li>
                                    <li className="for_nob"><NavLink to="/dashboard"><i className="fa fa-user"></i> پنل کاربری</NavLink></li>
                                        <li className="for_nob"><NavLink to="/logout"><i className="fa fa-sign-out"></i> خروج</NavLink></li>
                                        
                                </>
                            )}


                            <li>
                                <NavLink to="/contact"><i className="fa fa-volume-control-phone"></i> تماس با ما</NavLink>
                            </li>
                            <li><input type="checkbox" className="checkedBeautiful darkAndLight mobileShow" checked={isLight} onChange={(e)=>ligthBack(e)} /></li>
                            <li>
                                <SearchForm url="/" />
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>

    )
}
export default withRouter(HeaderBlog)