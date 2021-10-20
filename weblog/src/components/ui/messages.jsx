import React, { useContext } from "react";
import { ContextDash } from "../context/context";
import Message from "./message";

export const Messages = () => {
  const context = useContext(ContextDash)
  const { typeOfMessage, messageArr } = context
  if (messageArr.length > 0) {
    switch (typeOfMessage) {
      case "error": return (
        <div className="fixedR">
          {messageArr.map((err, index) => {
            return (
              <Message
                key={index}
                index={index}
                classN="alertBox-error"
                message={err}
              />
            );
          })}
        </div>
      );
      case "success": return (
        <div className="fixedR">
          <Message
            classN=""
            message={messageArr}
          />
        </div>
      );
      default: return null
    }

  } else {
    return null
  }

};

