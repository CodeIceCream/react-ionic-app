// API的统一管理
import requests from './request';

const REQUEST_HOST = 'http://localhost';
const REQUEST_PORT = '3001';
const REQUEST_URL = `${REQUEST_HOST}:${REQUEST_PORT}`;

// 发GET请求:axios发请求返回的结果是Promise对象
export const reqContribution = () =>
  requests({
    url: REQUEST_URL + '/contribution',
    method: 'get',
  });
