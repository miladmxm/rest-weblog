import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getDashboard } from "../../../action/dashboard";
import Aside from "./common/aside";
const Dashboard = (props) => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getDashboard())
  },[])
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
