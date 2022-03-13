// 当前这个模块，API进行统一管理
import requests from "./request";
import mockRequest from './mockRequest'

// 三级联动接口
// /api/product/getBaseCategoryList get 无参数
// 发请求:axios发请求返回的是promise对象

// export const reqCategoryList = () => requests.get(`/product/getBaseCategoryList`);
export const reqCategoryList = () => requests({ url: '/product/getBaseCategoryList', method: 'get' });

// 获取banner(Home首页轮播图接口)
export const reqGetBannerList = () => mockRequest.get('/banner');

export const reqfloorList = () => mockRequest.get('/floor');

// 当前这个接口(获取搜索模块的数据)，给服务器传递一个默认参数，至少是一个空对象
export const reqGetSearchInfo = (params) => requests({ url: '/list', method: 'post', data: params })


