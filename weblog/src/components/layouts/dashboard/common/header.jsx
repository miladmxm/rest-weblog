import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SearchForm from "../../blog/common/search";

const HeaderDash = () => {
  const user = useSelector(state=>state.userHandler)
  return (
    <header className="fixed-top">
    <div className="dashboard-header">
      <div>
          <h4 className="tooltip" data-tooltip="مشاهده وبلاگ"><Link to="/">{ user.fullname}</Link></h4>
      </div>
      <SearchForm url='/dashboard/' />
      <Link to="/logout" className="btn">
        خروج
      </Link>
    </div>
    </header>
  );
};
export default HeaderDash;
