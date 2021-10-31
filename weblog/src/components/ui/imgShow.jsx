import React from "react";
import { useSelector } from "react-redux";
import ImageUploaded from "./singleImage";

const ImgShow = ({imgshow=[]}) => {
   
    const user = useSelector(state => state.userHandler)
    

    return(
        <div className="imgUploadGroup">
            {imgshow.map((src,index)=>{
                return <ImageUploaded url={`http://localhost:4000/uploads/image/${user.email}/${src}`} key={index} />
            })}
        </div>
    )
    
}

export default ImgShow