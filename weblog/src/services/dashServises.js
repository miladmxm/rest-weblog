import http from './httpService'
import config from "./config.json"

export const getAllPosts = (id) => {
   const token = localStorage.getItem('token')
   return http.get(`${config.localhost}/dashboard/${id}`,{
      headers:{
         'Authorization':`Bearer ${token}`
      }
   })
}

export const httpgetAllUsers = () => {
   const token = localStorage.getItem('token')
   return http.get(`${config.localhost}/dashboard/get-all-user`,{
      headers:{
         'Authorization':`Bearer ${token}`
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


export const editUser = (data,id) => {
   const token = localStorage.getItem('token')
   return http.put(`${config.localhost}/dashboard/edit-user/${id}`,data,{
      headers:{
         "Content-Type": "multipart/form-data",
         'Authorization':`Bearer ${token}`
      }
   })
}

export const deleteUser = (data, token) => {
   return http.post(`${config.localhost}/dashboard/delete-user/${token}`,JSON.stringify(data),{
      headers:{
         'Authorization':`Bearer ${token}`
      }
   })
}

export const deleteUserByAdmin = (id) => {
   const token = localStorage.getItem('token')
   return http.delete(`${config.localhost}/dashboard/delete-user-by-admin/${id}`,{
      headers:{
         'Authorization':`Bearer ${token}`
      }
   })
}

export const addUser = (data) => {
   const token = localStorage.getItem('token')
   return http.post(`${config.localhost}/dashboard/add-user`,data,{
      headers: {
         "Content-Type": "multipart/form-data",
         'Authorization':`Bearer ${token}`
      }
   })
}