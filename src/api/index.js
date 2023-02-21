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

// 根据用户id查询用户的所有帖子
export const queryPostByUserId = async (userId)=>{
    return await request({
        url:'/queryPostByUserId',
        method:'GET',
        params:{
            userId
        }
    })
}
// 提交帖子
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

// 获取用户信息
export const getUserByUserAccount = (userAccount)=>{
    return request({
        url:"/getUserByUserAccount",
        method:"GET",
        params:{
            userAccount
        }
    })
}

// 评论接口
export const putPostComment = (comment)=>{
    return request({
        url:"/putPostComment",
        method:"GET",
        params:{
            userAccount:comment.userAccount,
            commentContent:comment.MyComment,
            postId:comment.postId,
            date:comment.date,
            replyPostId:comment.reply
        }
    })
}

// 根据帖子查询评论
export const getComment=(postId)=>{
    return request({
        url:"/getComment",
        meghod:"GET",
        params:{
            postId:postId
        }
    })
}

// 添加评论数接口
export const addComment = ((postId)=>{
    return request({
        url:'/addComment',
        method:'GET',
        params:{
            postId
        }
    })
})

// 点赞接口
export const like = ((postId,userId)=>{
    return request({
        url:'/like',
        method:'GET',
        params:{
            postId,
            userId
        }
    })
})