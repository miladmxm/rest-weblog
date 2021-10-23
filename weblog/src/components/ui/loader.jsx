import React, { useContext, useEffect } from "react";
import { ContextDash } from "../context/context";

const Loader = () => {
    const { loader, setLoader, messaLoader } = useContext(ContextDash)
    window.addEventListener("offline", () => {
        setLoader(true)
        window.addEventListener("online", () => {
            setLoader(false)
        })
    })

    if (loader) {
        return <div className="loaderDad"><div className="loader">Loading...</div> <h3>{messaLoader}</h3> </div>
    } else {
        return null
    }
}

export default Loader