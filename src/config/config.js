//接口域名地址
let baseURL, protocol = 'https://',
    hostName = '';
console.log(process.env.NODE_ENV, process.env.VUE_APP_TYPE, process.env.VUE_APP_TITLE)
if (process.env.NODE_ENV === 'development') {
    hostName = 'devmicroodr.odrcloud.cn'
} else if (process.env.NODE_ENV === 'production') {
    if (process.env.VUE_APP_TYPE === "test") {
        hostName = 'testmicroodr.odrcloud.cn'
    } else if (process.env.VUE_APP_TYPE === "dev") {
        hostName = 'devmicroodr.odrcloud.cn'
    } else if (process.env.VUE_APP_TYPE === 'prod') {
        hostName = 'microodr.odrcloud.cn'
    } else {
        hostName = 'devmicroodr.odrcloud.cn'
    }
}
baseURL = protocol + hostName

export default {
    baseURL: baseURL,
    hostName: hostName
}