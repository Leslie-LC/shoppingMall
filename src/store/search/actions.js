import { reqGetSearchInfo } from "@/api";
const actions = {
    // params = {} 默认传一个空对象
    async getSearchList({ commit }, params = {}) {
        let result = await reqGetSearchInfo(params)
        console.log(result);
        if (result.code == 200) {
            commit('GETSEARCHLIST', result.data)
        }
    }
}
export default actions;
