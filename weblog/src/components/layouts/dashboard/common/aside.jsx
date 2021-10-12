import React, { useState } from "react";
import { Link } from "react-router-dom";
import DropShadow from "../../../utils/brop-shadow";
import SearchForm from "./search";

const Aside = () => {
  const [toggleSide, setToggleSide] = useState(false);
  const sideShow = () => {
    setToggleSide(true);
  };
  const sideHide = () => {
    setToggleSide(false);
  };
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
              <Link className="active" to="/dahsboard/">
                <i className="fa fa-book"></i>
                پست ها
              </Link>
            </li>
            <li>
              <i className="fa fa-plus"></i>
              <Link to="/dahsboard/add-post">افزودن پست</Link>
            </li>
            <li>
              <i className="fa fa-cog"></i>
              <Link to="/dahsboard/setting">تنظیمات حساب</Link>
            </li>
            <li>
              <SearchForm />
            </li>
            <i onClick={sideHide} className="fa fa-cog side-settingShow"></i>
          </ul>
        </nav>
      </aside>
      <DropShadow click={sideHide} toggleShow={toggleSide} />
    </>
  );
};
export default Aside;
