import { reqGoodsInfo } from '@/api'

const actions = {
    // 通过Api里面的接口函数调用，向服务器发请求，获取服务器的数据
    async getGoodsInfo({ commit }, skuId) {
        let result = await reqGoodsInfo(skuId);
        if (result.code == 200) {
            commit('GETGOODSINFO', result.data)
        }
    },
};

export default actions;