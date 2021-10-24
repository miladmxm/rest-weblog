import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { cleareDash } from "../../../action/dashboard";
import { deleteUser } from "../../../action/user";

const Logout = ({ history }) => {
    const dispatch = useDispatch()
    useEffect(() => {
        localStorage.removeItem('token')
        dispatch(cleareDash())
        dispatch(deleteUser())
        history.replace('/')
    },[])
    return null
}

export default Logout