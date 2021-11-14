import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { clearAllUsers } from "../../../action/allUsers";
import { cleareDash } from "../../../action/dashboard";
import { deleteUser } from "../../../action/user";

const Logout = ({ history }) => {
    const dispatch = useDispatch()
    useEffect(() => {
        localStorage.removeItem('token')
        dispatch(cleareDash())
        dispatch(deleteUser())
        dispatch(clearAllUsers())
        history.replace('/')
    },[])
    return null
}

export default Logout