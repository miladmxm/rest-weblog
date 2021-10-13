import React, { useState } from "react";
import DropShadow from "./brop-shadow";
import UploadImg from "./uploadimage";

const UploadBox = () => {
    const [toggleUp , setToggleUp] = useState(false)
    return (
        <>
            <DropShadow click={()=>setToggleUp(false)} toggleShow={toggleUp} />
            <section className="uoloadBox">
                <UploadImg name="image" uploadChange={e=>console.log(e)}title="تصویر جهت آپلود انتخاب کنید" />
            </section>
        </>
    )
}
export default UploadBox