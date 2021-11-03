import http from './httpService'

import config from "./config.json"


export const getAllPosts = (id,tk) => {
   return http.get(`${config.localhost}/dashboard/${id}`,{
      headers:{
         'Authorization':`Bearer ${tk}`
      }
   })
}

export const addPost = (data) => {
   const token = localStorage.getItem('token')
   return http.post(`${config.localhost}/dashboard/add-post`,data,{
      headers:{
         "Content-Type": "multipart/form-data",
         'Authorization':`Bearer ${token}`
      }
   })
}
export const editPost = (id, data) => {
   const token = localStorage.getItem('token')
   return http.put(`${config.localhost}/dashboard/edit-post/${id}`,data,{
      headers:{
         "Content-Type": "multipart/form-data",
         'Authorization':`Bearer ${token}`
      }
   })
}

export const deletePost = (id) => {
   const token = localStorage.getItem('token')
   return http.delete(`${config.localhost}/dashboard/delete-post/${id}`,{
      headers:{
         'Authorization':`Bearer ${token}`
      }
   })
}


export const getAllImage = (email) => {
   const token = localStorage.getItem('token')
   return http.get(`${config.localhost}/dashboard/all-image-user/${email}`,{
      headers:{
         'Authorization':`Bearer ${token}`
      }
   })
}


export const editUser = (data) => {
   const token = localStorage.getItem('token')
   return http.put(`${config.localhost}/dashboard/edit-user`,data,{
      headers:{
         "Content-Type": "multipart/form-data",
         'Authorization':`Bearer ${token}`
      }
   })
}
