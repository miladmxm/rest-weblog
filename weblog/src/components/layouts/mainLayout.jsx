import React from "react"
import HeaderBlog from "./blog/common/header"
import HeaderDash from "./dashboard/common/header"
import Dashboard from "./dashboard/dashlayout"

const MainLayout = ({ children, dashboard }) => {
    console.log(dashboard);
    if (dashboard) {
        return (
            <>
                <HeaderDash />
                <Dashboard>
                    {children}
                </Dashboard>
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