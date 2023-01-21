import Vue from 'vue'
import VueRouter from 'vue-router'
// 引入进度条
import nProgress from 'nprogress';
// 引入进度条样式，可以修改css文件中的样式
import "nprogress/nprogress.css"
Vue.use(VueRouter)

// 重写push和replace
// 保存源push
let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;
// location是原本push应该传入的参数
VueRouter.prototype.push = function (location, onResolve, onReject) {
    if (onResolve && onReject) {
        originPush.call(this, location, onResolve, onReject)
    } else {
        originPush.call(this, location, () => { }, () => { })
    }
}
VueRouter.prototype.replace = function (location, onResolve, onReject) {
    if (onResolve && onReject) {
        originReplace.call(this, location, onResolve, onReject)
    } else {
        originReplace.call(this, location, () => { }, () => { })
    }
}

const router = new VueRouter({
    routes: [
        {
            // 重定向，开发时会变动，项目结束时重新调整
            path:'/',
            redirect: '/home'
        },
        {
            name:'login',
            path:'/login',
            component:()=>import('@/views/Login')
        },
        {
            name:'register',
            path:'/register',
            component:()=>import('@/views/Register')
        },
        {
            name:'home',
            path:'/home',
            component:()=>import('@/views/Home'),
            children:[
                {
                    name:'homepage',
                    path:'homepage',
                    component:()=>import("@/views/Home/HomePage")
                }
            ]
        },
        {
            name:'searchPage',
            path:'/searchpage',
            component:()=>import('@/components/Header/search')
        }
    ]
})

router.beforeEach((to,from,next)=>{
    // 开始进度条
    nProgress.start()
    next();
})
router.afterEach((to,from)=>{
    // 结束进度条
    nProgress.done()
})
export default router;