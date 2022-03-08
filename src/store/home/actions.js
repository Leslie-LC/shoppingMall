import { reqCategoryList, reqGetBannerList } from '@/api'

const actions = {
    // 通过Api里面的接口函数调用，向服务器发请求，获取服务器的数据
    async categoryList({ commit }) {
        let result = await reqCategoryList();
        if (result.code == 200) {
            commit('CATEGORYlIST', result.data)
        }
    },

    async getBannerList({ commit }) {
        let result = await reqGetBannerList();
        if (result.code == 200) {
            commit('GETBANNERLIST', result.data)
        }
    }
};

export default actions;