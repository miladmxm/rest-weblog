import React, { useState } from "react";
import { ContextDash } from "./context";

const DashContext = ({ children }) => {
  const [DropShadowToggle, setDropShadowToggle] = useState(false);
  const [toggleSide, setToggleSide] = useState(false);
  const [uploadBoxShow, setUploadBoxShow] = useState(false)
  const [loader, setLoader] = useState(false)
  const [messaLoader, setMessaLoader] = useState('اتصال اینترنت خود را بررسی کنید')
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
    setTimeout(() => {
      setMessageArr([])
    },8000)
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
      setMessageArr,
      loader,
      setLoader,
      messaLoader,
      setMessaLoader
    }}>
      {children}
    </ContextDash.Provider>
  )
}
export default DashContext