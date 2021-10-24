import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getAllImage } from "../../services/dashServises";
import ImageUploaded from "./singleImage";

const ImgShow = ({numberOfShow = 42}) => {
    const [img,setImg] =useState([])
    const user = useSelector(state => state.userHandler)
    const imgshow= []

    useEffect(async()=>{
        try {
            const data = await getAllImage(user.email)
            console.log(data.data);
            if(data.status=200){
                setImg(data.data)
            }else{
                return false
            }
            
        } catch (err) {
            console.log(err);
        }

    },[])
    let cuont;
    if(img.length == 0){
        return(
            <h2>تصویری برای نمایش وجود ندارد</h2>
        )
    }else if(numberOfShow >= img.length){
        cuont = img.length
    }else{
        cuont = numberOfShow
    }
    for(let i = 0; i < cuont;i++){
        imgshow.push(img[i])
    }

    return(
        <div className="imgUploadGroup">
            {imgshow.map((src,index)=>{
                return <ImageUploaded url={`http://localhost:4000/uploads/image/${user.email}/${src}`} key={index} />
            })}
        </div>
    )
    
}

export default ImgShow