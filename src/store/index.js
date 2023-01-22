import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// state:存储数据的地方
const state = {
    token:localStorage.getItem("token"),
    userAccount:localStorage.getItem("userAccount"),
    userNick:''
}

// mutations：修改state的手段
const mutations = {
    //参数1：state仓库，参数2：数据
    SETTOKEN(state,value){
        state.token = value;
    },
    SETUSER(state,user){
        state.userAccount = user.userAccount;
        state.userNick = user.userNick;
    }
}

// actions：处理业务逻辑
const actions = {
    //commit是从context中解构出来的，用来调用mutations中的方法
    setToken({commit},token){
        commit("SETTOKEN",token);
    },
    setUser({commit},user){
        commit("SETUSER",user);
    }
}

const store = new Vuex.Store({
    // ...
    state,
    mutations,
    actions,
})

export default store;