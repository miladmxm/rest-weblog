import React from "react";

const UploadImg = ({name,uploadChange,title}) => {
    return (
        <div className="uploadFile">
          <label className="fileUploadD" for={name}>
            {" "}
            <img className="preW" src="" alt="" />{" "}
            <span>{title}</span>
            <input
              type="file"
              name= {name}
              id={name}
              accept="image/*"
              onChange = {e=>uploadChange(e)}
            />
          </label>
        </div>
    )
}

export default UploadImg