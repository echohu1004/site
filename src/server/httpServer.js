import Vue from 'vue'
import axios from 'axios'
import router from '@/router/index.js'
import { setStore, getStore, removeStore, getStoreSession } from '@/utils/utils.js'
import config from '@/config/config.js'

axios.defaults.baseURL = config.baseURL
axios.defaults.timeout = 10000
axios.defaults.headers = {
    //"Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
    "Content-Type": "application/json",
    "cType": "PC"
}

//刷新token的请求方法
const getRefreshToken = () => {
    let data = {
        refreshToken: getStore('refreshToken')
    };
    //qs的使用主要是因为该接口需要表单提交的方式传数据，具体使用方法自行百度
    return axios.post('/peace/user/refreshToken', data);
}

//添加一个请求拦截器
axios.interceptors.request.use(config => {
    //在请求发送之前做一些事
    let deviceID = getStore('deviceId')
        // 认证令牌
    if (getStoreSession('haslogin') == 'yes') {
        const authToken = getStore('authToken');
        config.headers.JWTToken = authToken;
    }
    config.headers.deviceId = deviceID
    config.headers.cType = "PC"
    config.headers.appName = "peace"
    return config
}, error => {
    Vue.prototype.$message({
        showClose: true,
        message: error,
        type: 'error'
    });
    return Promise.reject(error)
})

//添加一个返回拦截器
axios.interceptors.response.use(response => {
    //对响应数据做些事
    if (response.data.code === 1002) {
        let config = response.config;
        return getRefreshToken()
            .then(function(res) {
                let data = res.data;
                if (data.code === 1000) {
                    setStore('authToken', data.data.authToken);
                    setStore('refreshToken', data.data.refreshToken);
                    //修改原请求的token
                    let authToken = getStore('authToken');
                    config.headers.JWTToken = authToken;
                    /*这边不需要baseURL是因为会重新请求url
                     *url中已经包含baseURL的部分了
                     *如果不修改成空字符串，会变成'api/api/xxxx'的情况*/
                    config.baseURL = '';
                    //重新请求
                    return axios(config).then(
                        (responsedata) => {
                            console.log("重发上一次请求")
                            return responsedata
                        }
                    ).catch(
                        (response) => {
                            console.log("未渲染成功")
                            return response
                        });
                } else {
                    Vue.prototype.$message({ showClose: true, message: '超时退出', type: 'warning' });
                    removeStore('authToken');
                    removeStore('refreshToken');
                    removeStore('loginInfouser');
                    router.push({path: '/login'});
                    return { data: { code: '1001' } }
                }
            });

    } else if (response.data.code === 1001) {
        Vue.prototype.$message({ showClose: true, message: '超时退出', type: 'warning' });
        removeStore('authToken');
        removeStore('refreshToken');
        removeStore('loginInfouser');
        router.push({path: '/login'});
        return { data: { code: '1001' } }
    } else {
        return response
    }
}, error => {
    // 下面是接口回调的satus ,因为我做了一些错误页面,所以都会指向对应的报错页面
    if (error.response.status === 403) {
        router.push({
            path: "/error/403"
        });
    }
    if (error.response.status === 500) {
        router.push({
            path: "/error/500"
        });
    }
    if (error.response.status === 502) {
        router.push({
            path: "/error/502"
        });
    }
    if (error.response.status === 404) {
        // router.push({
        //     path: "/error/404"
        // });
    }
    return Promise.resolve(error.response)
})

//错误处理
function errorState(response) {
    // 如果http状态码正常，则直接返回数据
    if (response && (response.status === 200 || response.status === 304 || response.status === 400)) {
        return response
            // 如果不需要除了data之外的数据，可以直接 return response.data
    } else {
        Vue.prototype.$message({
            showClose: true,
            message: '网络异常',
            type: 'error'
        });
    }

}

function successState(res) {
    //统一判断后端返回的错误码
    if (res.data.code == '9999') {
        Vue.prototype.$message({
            showClose: true,
            message: '9999-服务器内部异常/网络异常',
            type: 'error'
        });
    }
}

const httpServer = (opts, data) => {
    let httpDefaultOpts = { //http默认配置
        method: opts.method || "post",
        url: opts.url
    }

    if (opts.method == 'get') {
        httpDefaultOpts.params = data
    } else {
        httpDefaultOpts.data = data
    }

    let promise = new Promise(function(resolve, reject) {
        axios(httpDefaultOpts).then(
            (res) => {
                successState(res)
                resolve(res)
            }
        ).catch(
            (response) => {
                errorState(response)
                reject(response)
            }
        )
    })
    return promise
}

export default httpServer