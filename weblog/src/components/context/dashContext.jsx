import React, { useState } from "react";
import { ContextDash } from "./context";

const DashContext = ({ children }) => {
  const [DropShadowToggle, setDropShadowToggle] = useState(false);
  const [toggleSide, setToggleSide] = useState(false);
  const sideShow = () => {
    setToggleSide(true);
    setDropShadowToggle(true)
  };
  const sideHide = () => {
    setToggleSide(false);
    setDropShadowToggle(false)
  };
  const DropShadowClick = () => {
    setDropShadowToggle(false);
    setToggleSide(false)
  }
  return (
    <ContextDash.Provider value={{ DropShadowToggle, setDropShadowToggle, DropShadowClick, toggleSide, setToggleSide, sideShow, sideHide }}>
      {children}
    </ContextDash.Provider>
  )
}
export default DashContext