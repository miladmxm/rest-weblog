import React, { useState } from "react";
import { ContextDash } from "./context";

const DashContext = ({ children }) => {
  const [DropShadowToggle, setDropShadowToggle] = useState(false);
  const [toggleSide, setToggleSide] = useState(false);
  const [uploadBoxShow, setUploadBoxShow] = useState(false)
  const [textForCopy, setTextForCopy] = useState('')
  const [messageArr, setMessageArr] = useState([])
  const [typeOfMessage, setTypeOfMessage] = useState('error')
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

  const setMessage = (message, type)=>{
    setMessageArr(message)
    setTypeOfMessage(type)
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
      copyBoxShow,
      messageArr,
      typeOfMessage,
      setMessage,
      setMessageArr
    }}>
      {children}
    </ContextDash.Provider>
  )
}
export default DashContext