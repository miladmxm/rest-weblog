import React from "react"
import { useSelector } from "react-redux"
import isEmpty from "../utils/isEmpty"
import HeaderBlog from "./blog/common/header"
import HeaderDash from "./dashboard/common/header"
import Dashboard from "./dashboard/dashlayout"

const MainLayout = ({ children, dashboard }) => {
  const user = useSelector(state => state.userHandler)
    
    if (isEmpty(user) && dashboard) {
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