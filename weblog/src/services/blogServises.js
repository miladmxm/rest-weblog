import http from './httpService'

import config from "./config.json"

export const getAllPosts = () => {
   return http.get(`${config.localhost}`)
}

export const registerUser =(data)=>{
   return http.post(`${config.localhost}/users/register` , JSON.stringify(data))
}