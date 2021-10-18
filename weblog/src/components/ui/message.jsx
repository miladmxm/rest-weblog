import React, { useEffect, useState } from "react";
const Message = ({ message, classN , index}) => {
  const [alertClass, setAlertClass] = useState("hidden-alertBox");
  const [timer, setTimer] = useState(null);

  const closeMessage = () => {
    setAlertClass("hide");
    clearTimeout(timer);
  };

  const show = () => {
    setAlertClass("show");
    setTimer(
      setTimeout(() => {
        setAlertClass("hide");
      }, 5000)
    );
  };
  console.log(alertClass);

  useEffect(() => {
    setTimeout(() => {
      show();
    },index * 200);
  }, []);

  // setTimeout(() => {
  //   show();
  // }, 200);

  return (
    <div className={`alertBox ${alertClass} ${classN}`}>
      <span className="closeAlert" onClick={closeMessage}>
        &times;
      </span>
      <h5>{message}</h5>
    </div>
  );
};

export default Message;
