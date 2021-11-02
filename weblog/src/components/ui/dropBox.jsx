import React, { useRef, useState } from "react";

const DropBox = ({ children, title }) => {

    const [show, setShow] = useState(false)
    
    const drop = useRef(null)

    const togge = () => {
        setShow(!show)
        if (!show) {
            drop.current.style.height = drop.current.scrollHeight+'px'
        } else {
            
            drop.current.style.height = 0
        }
    }

    return (
        <>
            <span className={show?'dropBoxTitle showBox':'dropBoxTitle'} onClick={togge}>{title} <i className="fa fa-caret-left"></i></span>
            <div ref={drop} className='dropBox' >
                {children}
            </div>
        </>
    )
}
export default DropBox