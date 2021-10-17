import React, { useRef } from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
const ImageUploaded = ({ url }) => {
    const urlHide = useRef()
    const copyImg=() =>{
        urlHide.current.select()
        document.execCommand("copy")
    }
  return (
    <div className="imgSingle">
      <LazyLoadImage src={url} delayTime={200} height={"100%"} width={"100%"} effect="blur" alt={`لینک تصویر : ${url}`}/>
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
