import React from "react";
import Aside from "./common/aside";
const Dashboard = (props) => {
  return (
    <>
      <div id="dashboard">
        <Aside />
        <section className="contentDash">
          {props.children}
        </section>
      </div>
    </>
  );
};
export default Dashboard;
