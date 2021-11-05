import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { ContextDash } from "../../../context/context";
import DropShadow from "../../../ui/brop-shadow";
import UploadBox from "../../../ui/uploadBox";
import SearchForm from "./search";

const Aside = () => {
  const user = useSelector(state => state.userHandler)
  const dashContext = useContext(ContextDash)
  const { sideShow, toggleSide, sideHide, showUploadBox } = dashContext
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
          <Link className="tooltip" data-tooltip="تکمیل مشخصات شما" to="/dashboard/setting">
            <div className="profileImg">
              <img src={`http://localhost:4000/uploads/${user.profileImg == "default" ? 'user.png':`image/${user.profileImg}`}`} />
            </div>
          </Link>
          <h4><Link target="_blank" to="/">{user.fullname}</Link></h4>
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
              <NavLink className="tooltip" data-tooltip="تکمیل مشخصات شما" to="/dashboard/setting">تنظیمات پروفایل</NavLink>
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
