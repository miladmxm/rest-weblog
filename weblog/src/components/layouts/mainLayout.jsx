import React from "react"
import HeaderBlog from "./blog/common/header"
import HeaderDash from "./dashboard/common/header"

const MainLayout = ({ children, dashboard }) => {
    if (dashboard) {
        return (
            <>
                <HeaderDash />
                {children}
            </>
        )
    } else {
        return (
            <>
                <HeaderBlog />
                {children}
            </>
        )
    }
}

export default MainLayout