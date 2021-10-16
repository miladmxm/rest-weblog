import React, { useRef } from "react";
const ImageUploaded = ({ url }) => {
    const urlHide = useRef()
    const copyImg=() =>{
        urlHide.current.select()
        document.execCommand("copy")
    }
  return (
    <div className="imgSingle">
      <img src={url} />
      <div className="buttonBox">
        <button onClick={copyImg}>
          <i className="fa fa-copy"></i>
        </button>
        <button>
          <i className="fa fa-file-image-o"></i>
        </button>
      </div>
      <input ref={urlHide} className="hide" onChange={()=>{}} value={url} />
    </div>
  );
};

export default ImageUploaded;
