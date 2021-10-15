import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextDash } from "../../../context/context";
import DropShadow from "../../../utils/brop-shadow";
import UploadBox from "../../../utils/uploadBox";
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
              <Link className="active" to="/dashboard/">
                پست ها
              </Link>
            </li>
            <li>
              <i className="fa fa-plus"></i>
              <Link to="/dashboard/add-post">افزودن پست</Link>
            </li>
            <li>
              <i className="fa fa-cog"></i>
              <Link to="/dashboard/setting">تنظیمات حساب</Link>
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
