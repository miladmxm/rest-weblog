import http from './httpService'

import config from "./config.json"

export const getAllPosts = () => {
   return http.get(`http://localhost:4000/`)
}