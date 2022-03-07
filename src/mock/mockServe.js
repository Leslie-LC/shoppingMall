// 引入mockjs模块
import Mock from 'mockjs';
// 将JSON数据格式引入进来
// 图片、JSON数据格式默认对外暴露
import banner from './banner.json';
import floor from './floor.json';

// mock数据
Mock.mock('/mock/banner', { code: 200, data: banner })
Mock.mock('/mock/floor', { code: 200, data: floor })



