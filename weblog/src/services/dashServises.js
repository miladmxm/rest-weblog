import http from './httpService'

import config from "./config.json"

const token = localStorage.getItem('token')

export const getAllPosts = (id,tk) => {
   return http.get(`${config.localhost}/dashboard/${id}`,{
      headers:{
         'Authorization':`Bearer ${token?token:tk}`
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

export const deletePost = (id) => {
   console.log("id"+id);
   return http.delete(`${config.localhost}/dashboard/delete-post/${id}`,{
      headers:{
         'Authorization':`Bearer ${token}`
      }
   })
}


export const getAllImage = (email) => {
   return http.get(`${config.localhost}/dashboard/all-image-user/${email}`)
}
