import axios from "axios";

//不使用export default的原因为可能有多个实例请求
export function request(config) {
    //创建axios实例，不创建实例直接使用axios是全局变量
    const instance = axios.create({
        baseURL:"http://152.136.185.210:7878/api/m5",
        timeout:5000
    });
    //请求拦截器，必须return出去，拦截后放行
    instance.interceptors.request.use((config)=> {
        //请求成功时操作
        return config},(error) => {
        //请求失败时操作
        return error});
    instance.interceptors.response.use((res)=>{
        //响应成功时操作
        return res},(error)=>{
        //响应失败时操作
        return error});
    //真正网络请求，返回promise
    return instance(config)
}