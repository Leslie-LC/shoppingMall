const getters = {
    categoryView(state) {
        return state.goodsInfo.categoryView || [];
    },
    skuInfo(state) {
        return state.goodsInfo.skuInfo || {};
    },
    spuSaleAttrList(state) {
        return state.goodsInfo.spuSaleAttrList || [];
    }
}
export default getters;
