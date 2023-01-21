import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import mode from './mod1'

const store = new Vuex.Store({
    // ...
    modules: {
        mode
    }
})

export default store;