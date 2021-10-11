import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchForm from "./search";

const HeaderDash = () => {
  const [activedToggleBtn, setActivedToggleBtn] = useState(false);
  const toggleMenu = () => {
    setActivedToggleBtn(!activedToggleBtn);
  };
  return (
    <header className="fixed-top">
    <div className="dashboard-header">
      <div>
        <h4 className="tooltip" data-tooltip="مشاهده وبلاگ"><Link target="_blank" to="/">میلاد حسیبی</Link></h4>
      </div>
      <SearchForm />
      <button type="button" className="btn">
        خروج
      </button>
    </div>
    </header>
  );
};
export default HeaderDash;
