import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { ContextDash } from "../../../context/context";
import DropShadow from "../../../ui/brop-shadow";
import UploadBox from "../../../ui/uploadBox";
import SearchForm from "./search";

const Aside = () => {

  const dashContext = useContext(ContextDash)
  const { sideShow, toggleSide, sideHide,showUploadBox } = dashContext

  return (
    <>
      <i
        onClick={sideShow}
        className={
          toggleSide
            ? "fa fa-cog side-settingShow for-show hide"
            : "fa fa-cog side-settingShow for-show"
        }
      ></i>
      <aside className={toggleSide ? "side-bar showSide" : "side-bar"}>
        <header>
          داشبورد وبلاگ <img stc="./img/logo.png" />
        </header>
        <nav>
          <ul>
            <li>
              <i className="fa fa-book"></i>
              <NavLink exact to="/dashboard/">
                پست ها
              </NavLink>
            </li>
            <li>
              <i className="fa fa-plus"></i>
              <NavLink to="/dashboard/add-post">افزودن پست</NavLink>
            </li>
            <li>
              <i className="fa fa-cog"></i>
              <NavLink to="/dashboard/setting">تنظیمات حساب</NavLink>
            </li>
            <li>
              <i className="fa fa-upload"></i>
              <Link onClick={showUploadBox} to="#">آپلود کردن تصویر</Link>
            </li>
            <li>
              <SearchForm />
            </li>
            <i onClick={sideHide} className="fa fa-cog side-settingShow"></i>
          </ul>
        </nav>
      </aside>
      <DropShadow />
      <UploadBox />
    </>
  );
};
export default Aside;
