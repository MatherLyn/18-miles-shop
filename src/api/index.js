import ajax from './ajax.js'

//登陆
export const reqLogin = (usename,password) => ajax("/login",{usename,password},"POST")

export const reqRegister = (user) => ajax("/register",user,"POST")