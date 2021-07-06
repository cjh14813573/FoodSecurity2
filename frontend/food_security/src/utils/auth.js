import Cookies from 'js-cookie'
import jwt from 'jsonwebtoken'

const TokenKey = 'jwt_token'

export function getToken() {

	console.log("get token:" + Cookies.get(TokenKey))
  return Cookies.get(TokenKey)
}

export function setToken(token) {
	console.log("set token:" + token)
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
	console.log("remove token:")
  return Cookies.remove(TokenKey)
}

export function verifyTokenTime(token){
	var decode = jwt.decode(token)
	var now = Date.parse(new Date()) / 1000
	if (now > decode.exp - 1) {
		return false
	}
	return true
}
