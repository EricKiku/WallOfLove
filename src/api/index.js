// 引入axios封装文件
import request from './request'

// 注册
export const register = (account,password,nick)=>{
    return request({
        url:'/register',    
        method:'GET',
        params:{
            userAccount:account,
            userNick:nick,
            userPassword:password
        }
    })
}
// 登录
export const login = (userAccount,userPassword)=>{
    return request({
        url:'/getToken',
        method:'GET',
        params:{
            userAccount,
            userPassword
        }
    })
}
// 验证token
export const tokenCheckout = (token)=>{
    return request({
        url:'/tokenCheckout',
        method:'GET',
        params:{
            token
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

// 获取所有post帖子
export const queryAllPost = ()=>{
    return request({
        url:'/queryAllPost',
        method:'GET'
    })
}

// 根据postId查询post
export const queryPostByPostId = (postId)=>{
    return request({
        url:'/queryPostByPostId',
        method:"GET",
        params:{
            postId
        }
    })
}

export const putPost = (userAccount,postMessage,postDate)=>{
    return request({
        url:'/putPost',
        method:'GET',
        params:{
            userAccount,
            postMessage,
            postDate
        }
    })
}