import React from "react";
import Confirm from "../../ui/confirm";
import Aside from "./common/aside";
import HeaderDash from "./common/header";
const Dashboard = ({ children }) => {
  return (
    <>
      <Confirm />
      <HeaderDash />
      <div id="dashboard">
        <Aside />
        <section className="contentDash">{children}</section>
      </div>
    </>
  );
};
export default Dashboard;
