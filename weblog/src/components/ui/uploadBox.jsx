import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { ContextDash } from "../context/context";
import DropShadow from "./brop-shadow";
import CopyBox from "./copyText";
import ImgShow from "./imgShow";
import UploadImg from "./uploadimage";
import { localhost } from "../../services/config.json";
import isEmpty from "../utils/isEmpty";
import { useSelector } from "react-redux";
import { getAllImage } from "../../services/dashServises";

const UploadBox = () => {
  const { uploadBoxShow, copyBoxShow } = useContext(ContextDash);;

  const [progressBar, setProgressBar] = useState(0);

  const uploaded = (e) => {
    if (isEmpty(e.target.files)) {
      const data = new FormData();
      data.append("image", e.target.files[0]);
      const token = localStorage.getItem("token");

      axios
        .post(`${localhost}/dashboard/image-upload`, data, {
            onUploadProgress: (progressEvent) => {
                setProgressBar(Math.floor((progressEvent.loaded * 100) / progressEvent.total));
          },
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) =>{
            if(res.status === 200){
                setProgressBar(0)
                copyBoxShow(res.data.message)
            }
        })
        .catch((err) => console.log(err));
    } else {
      return false;
    }
  };
  
  const [img,setImg] =useState([])
  const user = useSelector(state => state.userHandler)

  useEffect(async()=>{
      try {
          const data = await getAllImage(user.email)
          if(data.status=200){
              setImg(data.data)
          }else{
              return false
          }
          
      } catch (err) {
          console.log(err);
      }

  },[uploadBoxShow])
  if (uploadBoxShow) {
    return (
      <>
        <DropShadow zindex="104" />
        <section className="uoloadBox">
          <div className="container">
            <UploadImg
              name="image"
              uploadChange={(e) => uploaded(e)}
              title="یک تصویر جهت آپلود انتخاب کنید"
            />
            <div className="row">
              <div className="progress">
                <div
                  className="progressBar"
                  style={{ width: `${progressBar}%` }}
                >{`${progressBar}%`}</div>
              </div>
            </div>
            <div className="row">
              <CopyBox />
            </div>
            <ImgShow imgshow={img} />
          </div>
        </section>
      </>
    );
  } else {
    return null;
  }
};
export default UploadBox;
