import axios from "axios";
import { MessageError } from "../components/ui/messages";

axios.defaults.headers.post["Content-Type"] = "application/json"

axios.interceptors.response.use(null, err=> {
    const expectedError = err.response && err.response.status >= 400 && err.response.status < 500
    if (!expectedError) {
        MessageError(["مشکلی در سمت سرور رخ داده است"])
    }
    return Promise.reject(err)
})

export default {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete:axios.delete
}