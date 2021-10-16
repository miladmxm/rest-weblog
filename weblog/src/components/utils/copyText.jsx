import React, { useContext, useRef } from "react";
import { ContextDash } from "../context/context";

const CopyBox = () => {
    const contextDash = useContext(ContextDash)
    const {textForCopy} = contextDash
    const inputEl = useRef()
    const copyTxt = () => {
        inputEl.current.select()
        document.execCommand("copy")
    }
    return (
        <>
            <div className={textForCopy.length > 4 ? "hideTop showing" : "hideTop"}>
                <div className="row">
                <input readOnly id="copyBox" ref={inputEl} value={textForCopy} />
                <button id="copyURL" onClick={copyTxt} className="btnCopy" type="button">
                    <i className="fa fa-copy"></i>
                </button>
                </div>
            </div>
        </>
    )
}
export default CopyBox