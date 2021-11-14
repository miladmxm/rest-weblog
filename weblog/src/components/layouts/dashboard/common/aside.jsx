import React, { useContext, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { withRouter } from "react-router";
import { ContextDash } from "../../../context/context";
import DropShadow from "../../../ui/brop-shadow";
import UploadBox from "../../../ui/uploadBox";
import SearchForm from "../../blog/common/search";

const Aside = ({ location }) => {
  const user = useSelector(state => state.userHandler)
  const dashContext = useContext(ContextDash)
  const { sideShow, toggleSide, sideHide, showUploadBox } = dashContext

  useEffect(() => {
    if (toggleSide) {
      sideHide()
    }
  }, [location])

  return (
    <>
      <i onClick={sideShow} className={toggleSide ? "fa fa-cog side-settingShow for-show hide" : "fa fa-cog side-settingShow for-show"}></i>
      <aside className={toggleSide ? "side-bar showSide" : "side-bar"}>
        <header>
          <Link className="tooltip" data-tooltip="تکمیل مشخصات شما" to={`/dashboard/setting/${user.userId}`}>
            <div className="profileImg">
              <img src={`http://localhost:4000/uploads/${user.profileImg == "default" ? 'user.png' : `image/${user.profileImg}`}`} />
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
            {user.dadashami === "dada" ?
              <li>
                <i className="fa fa-users"></i>
                <NavLink to="/dashboard/users">همه کاربران</NavLink>
              </li>
              : null}
            <li>
              <i className="fa fa-cog"></i>
              <NavLink className="tooltip" data-tooltip="تکمیل مشخصات شما" to={`/dashboard/setting/${user.userId}`}>تنظیمات پروفایل</NavLink>
            </li>
            <li>
              <i className="fa fa-upload"></i>
              <Link onClick={showUploadBox} to="#">آپلود کردن تصویر</Link>
            </li>
            <li>
              <SearchForm url='/dashboard/' />
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
export default withRouter(Aside);
