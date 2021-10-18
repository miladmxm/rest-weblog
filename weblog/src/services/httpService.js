import axios from "axios";
import { Messages } from "../components/ui/messages";

axios.defaults.headers.post["Content-Type"] = "application/json"

axios.interceptors.response.use(null, err=> {
    const expectedError = err.response && err.response.status >= 400 && err.response.status < 500
    if (!expectedError) {
        // Messages(["مشکلی در سمت سرور رخ داده است"])
        console.log('object');
    }
    return Promise.reject(err)
})

export default {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete:axios.delete
}