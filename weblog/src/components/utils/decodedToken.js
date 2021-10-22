import jwt from 'jsonwebtoken'

export const decodedToken = token => {
    return jwt.decode(token,{complete:true})
}
