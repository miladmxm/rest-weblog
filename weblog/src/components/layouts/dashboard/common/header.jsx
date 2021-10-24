import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SearchForm from "./search";

const HeaderDash = () => {
  const user = useSelector(state=>state.userHandler)
  return (
    <header className="fixed-top">
    <div className="dashboard-header">
      <div>
          <h4 className="tooltip" data-tooltip="مشاهده وبلاگ"><Link target="_blank" to="/">{ user.fullname}</Link></h4>
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
