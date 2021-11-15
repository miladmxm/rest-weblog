import http from './httpService'

import config from "./config.json"

export const getAllPosts = () => {
   return http.get(`${config.localhost}`)
}

export const getSinglePosts = (id) => {
   return http.get(`${config.localhost}/blog/${id}`)
}

export const registerUser = (data) => {
   return http.post(`${config.localhost}/users/register`, JSON.stringify(data))
}

export const loginUser = (data) => {
   return http.post(`${config.localhost}/users/login`, JSON.stringify(data))
}

export const isUserForUp = (token) => {
   return http.get(`${config.localhost}/users/isuservalid/${token}`)
}

export const contact = (data) => {
   return http.post(`${config.localhost}/contact`, JSON.stringify(data))
}
export const forgetPass = (data) => {
   return http.post(`${config.localhost}/users/forget-pass`, JSON.stringify(data))
}
export const resetPass = (data, tk) => {
   return http.post(`${config.localhost}/users/reset-pass/${tk}`, JSON.stringify(data))
}