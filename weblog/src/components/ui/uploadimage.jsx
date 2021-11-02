import React, { useState } from "react";
import {localhost} from '../../services/config.json'
const UploadImg = ({ name, uploadChange, title,defaultImg , classN='' }) => {
    const [preW, setPreW] = useState(defaultImg?`${localhost}/uploads/thumbnails/${defaultImg}`:null)
    const [titleStatus , setTitleStatus] = useState(title)
    const uploadValidator = e => {
        const file = e.target.files[0]
        console.log(file);
        if (file && file.size < 4000000) {
            const reader = new FileReader()
            reader.addEventListener('load', function () {
                setTitleStatus("کلیک برای تغییر تصویر")
                setPreW(this.result)
            })
            reader.readAsDataURL(file)
            uploadChange(e)
        } else {
            setTitleStatus("لطفاً یک تصویر با حجم کمتر از 4 مگابایت انتخاب کنید")
        }
    }
    return (
        <div className={`uploadFile ${classN}`}>
          <label className="fileUploadD" htmlFor={name}>
            {" "}
            <img className="preW" style={preW !== null? {display:"block"}:null} src={preW} alt="" />{" "}
            <span>{titleStatus}</span>
            <input
              type="file"
              name= {name}
              id={name}
              accept="image/*"
              onChange = {e=>uploadValidator(e)}
            />
          </label>
        </div>
    )
}

export default UploadImg