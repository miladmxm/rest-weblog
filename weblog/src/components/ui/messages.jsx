import React, { useEffect, useState } from "react";
import Message from "./message";

export const MessageError = ({ errors }) => {
  if (errors.length > 0) {
    return (
      <div className="fixedR">
        {errors.map((err, index) => {
          return (
            <Message key={index} index={index} classN="alertBox-error" message={err}/>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
};
