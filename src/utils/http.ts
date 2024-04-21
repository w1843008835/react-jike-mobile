import { ConfigProvider } from "antd-mobile";
import axios from "axios";

const httpInstance = axios.create({
    baseURL:'http://localhost:8888/',
    timeout:5000
})

httpInstance.interceptors.request.use(
    (config)=>{
        return config
    },
    (error)=>{
        return Promise.reject(error)
    }
)

httpInstance.interceptors.response.use(
    (config)=>{
        return config
    },
    (error)=>{
        return Promise.reject(error)
    }
)

export {httpInstance}