import React, { useContext } from "react";
import { ContextDash } from "../context/context";
import DropShadow from "./brop-shadow";
import CopyBox from "./copyText";
import UploadImg from "./uploadimage";

const UploadBox = () => {
    const dashcontext = useContext(ContextDash)
    const { uploadBoxShow,copyBoxShow } = dashcontext
    if (uploadBoxShow) {
        return (
            <>
                <DropShadow zindex="104" />
                <section className="uoloadBox">
                    <div className="container">
                        <UploadImg name="image" uploadChange={e => console.log(e)} title="یک تصویر جهت آپلود انتخاب کنید" />
                        <div className="row">
                            <div className="progress">
                                <div className="progressBar"></div>
                            </div>
                        </div>
                        <div className="row">
                            <button className="btn btn-success btn-sm sendImg" onClick={()=>copyBoxShow('https://tpc.googlesyndication.com/simgad/8307608687953688610/downsize_200k_v1?sqp=4sqPyQSWAUKTAQgAEhQNzczMPhUAAABAHQAAAAAlAAAAABgAIgoNAACAPxUAAIA_Kk8IWhABHQAAtEIgASgBMAY4A0CAwtcvSABQAFgAYFpwAngAgAEAiAEAkAEAnQEAAIA_oAEAqAEAsAGAreIEuAH___________8BxQEtsp0-MhoIqgIQnAEYASABLQAAAD8wqgI4nAFFAACAPw&rs=AOga4qnaLPcVla9-NeRjiZgiCZmf7n4nGA')}>ارسال عکس</button>
                            <CopyBox />
                        </div>
                        <div className="row">
                            
                        </div>
                    </div>
                </section>
            </>
        )
    } else {
        return null
    }
}
export default UploadBox