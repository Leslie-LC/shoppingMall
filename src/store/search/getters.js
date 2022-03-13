const getters = {
    // 可以将我们将来在组件当中需要用的数据简化
    // 当前形参state:是当前仓库的state，不是大仓库的state
    goodsList(state) {
        // 如果没有网络，应该返回undefine
        // 计算属性的属性值至少要来一个空数组
        return state.searchList.goodsList || [];
    },
    attrsList(state) {
        return state.searchList.attrsList
    },
    trademarkList(state) {
        return state.searchList.trademarkList
    }
}
export default getters;
