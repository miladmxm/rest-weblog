import React, { useState } from "react";
import { ContextDash } from "./context";

const DashContext = ({ children }) => {
  const [DropShadowToggle, setDropShadowToggle] = useState(false);
  const [toggleSide, setToggleSide] = useState(false);
  const [uploadBoxShow, setUploadBoxShow] = useState(false)
  const [showCopyText, setShowCopyText] = useState(false)
  const [textForCopy, setTextForCopy] = useState('')

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
    setUploadBoxShow(false)
  }

  const showUploadBox = () => {
    setUploadBoxShow(true)
    setDropShadowToggle(true)
    setToggleSide(false)
  }

  const copyBoxShow = (text) => {
    setTextForCopy(text)
  }
  return (
    <ContextDash.Provider value={{
      DropShadowToggle,
      setDropShadowToggle,
      DropShadowClick,
      toggleSide,
      setToggleSide,
      sideShow,
      sideHide,
      uploadBoxShow,
      setUploadBoxShow,
      showUploadBox,
      textForCopy,
      setTextForCopy,
      copyBoxShow
    }}>
      {children}
    </ContextDash.Provider>
  )
}
export default DashContext