// 引入axios封装文件
import request from './request'

// 注册
export const register = (account,password)=>{
    return request({
        url:'/register',    
        method:'GET',
        params:{
            userAccount:account,
            userNick:account,
            userPassword:password
        }
    })
}
// 登录
export const login = (userAccount,userPassword)=>{
    return request({
        url:'/login',
        method:'GET',
        params:{
            userAccount,
            userPassword
        }
    })
}

// 查询账号是否已存在
export const findAccount =  (userAccount)=>{
    return  request({
        url:'/findAccount',
        method:'GET',
        params:{
            userAccount
        }
    })
}