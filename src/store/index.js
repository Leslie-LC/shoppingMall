import Vue from 'vue'
import Vuex from 'vuex'
import { reqCategoryList } from '@/api'

// 需要使用插件一次
Vue.use(Vuex)
// 引入小仓库
import home from '@/store/home'
import search from '@/store/search'

// state:仓库存储数据的地方
// mutations:修改state的唯一手段
// actions:处理action，可以书写自己的业务逻辑，也可以处理异步
// getters:理解为计算属性，用于简化仓库数据，让组件获取仓库的数据更方便

const state = {
    // state中的数据默认数据值不能乱写，服务器返回对象、数组，根据接口返回值初始化
    categoryList: []
}

const mutations = {
    CATEGORYlIST(state, categoryList) {
        state.categoryList = categoryList
    }
}

const actions = {
    // 通过Api里面的接口函数调用，向服务器发请求，获取服务器的数据
    async categoryList({ commit }) {
        let result = await reqCategoryList();
        if (result.code == 200) {
            commit('CATEGORYlIST', result.data)
        }
    }
};

// 对外暴露Store类的一个实例
export default new Vuex.Store({
    home,
    search,
    actions,
    mutations,
    state
})