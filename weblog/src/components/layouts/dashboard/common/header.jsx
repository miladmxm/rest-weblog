import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchForm from "./search";

const HeaderDash = () => {
  return (
    <header className="fixed-top">
    <div className="dashboard-header">
      <div>
        <h4 className="tooltip" data-tooltip="مشاهده وبلاگ"><Link target="_blank" to="/">میلاد حسیبی</Link></h4>
      </div>
      <SearchForm />
      <Link to="/logout" className="btn">
        خروج
      </Link>
    </div>
    </header>
  );
};
export default HeaderDash;
