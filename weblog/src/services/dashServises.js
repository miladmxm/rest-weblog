import http from './httpService'

import config from "./config.json"

const token = localStorage.getItem('token')
export const getAllPosts = (id) => {
   return http.get(`${config.localhost}/dashboard/${id}`,{
      headers:{
         'Authorization':`Bearer ${token}`
      }
   })
}

export const addPost = (data) => {
   return http.post(`${config.localhost}/dashboard/add-post`,data,{
      headers:{
         "Content-Type": "multipart/form-data"
      }
   })
}

export const getAllImage = (email) => {
   return http.get(`${config.localhost}/dashboard/all-image-user/${email}`)
}
