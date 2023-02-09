//token的封装
export function setToken(tokenKey, token) {
    return localStorage.setItem(tokenKey, token)
}//设置
export function getToken(tokenKey) {
    return localStorage.getItem(tokenKey)
}//获取
export function removeToken(tokenKey) {
    return localStorage.setItem(tokenKey)
}//删除