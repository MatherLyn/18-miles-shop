import axios from 'axios'
import {message} from 'antd'

export default function ajax (url,data={},method='GET'){
    return new Promise((resolve,reject)=>{
        let promise;
        if(method === "GET"){
            promise = axios.get(url,{params:data});
        }
        if(method === "POST"){
            promise = axios.post(url,data);
        }
        promise.then(response=>{
            resolve(response.data)
        }).catch(error=>{
            //统一处理请求错误的情�?
            message.error('请求错误：'+error.message);
        })
    })
}