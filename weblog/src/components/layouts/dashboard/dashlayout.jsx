import React from "react";
import Aside from "./common/aside";
const Dashboard = ({children}) => {
  return (
    <>
      <div id="dashboard">
        <Aside />
        <section className="contentDash">
          {children}
        </section>
      </div>
    </>
  );
};
export default Dashboard;
