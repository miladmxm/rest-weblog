import React from "react";
import ConfirmDeletePost from "../../ui/confirmdeletepost";
import ConfirmDeleteUser from "../../ui/confirmdeleteuser";
import Aside from "./common/aside";
import HeaderDash from "./common/header";
const Dashboard = ({ children }) => {
  return (
    <>
      <ConfirmDeletePost />
      <ConfirmDeleteUser />
      <HeaderDash />
      <div id="dashboard">
        <Aside />
        <section className="contentDash">{children}</section>
      </div>
    </>
  );
};
export default Dashboard;
