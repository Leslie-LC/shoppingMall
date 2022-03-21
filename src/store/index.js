import Vue from 'vue'
import Vuex from 'vuex'

// 引入小仓库
import home from './home/index'
import search from './search/index'
import detail from './detail/index'

// 需要使用插件一次
Vue.use(Vuex)

// state:仓库存储数据的地方
// mutations:修改state的唯一手段
// actions:处理action，可以书写自己的业务逻辑，也可以处理异步
// getters:理解为计算属性，用于简化仓库数据，让组件获取仓库的数据更方便

// 对外暴露Store类的一个实例
export default new Vuex.Store({
    modules: {
        home,
        search,
        detail
    }
})