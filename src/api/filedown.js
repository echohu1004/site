import saasconfig from '@/config/config.js'
import { getStore } from '@/utils/utils.js'
import lodash from 'lodash'

/**
 *
 *
 * @param {string} path - '/api/api'
 * @param {object} data - {fileid:'fileid',caseid:'caseid'}
 * @param {string} name - 'name.text', 如果传null的话，会默认取Content-Disposition里的文件名
 * @param {*} payload - 放在POST请求的Request Payload里面的参数，而不是跟在url后面的参数（即Query String Parameters里的参数）
 * @param {string} [sendType='POST'] - 默认是POST, 如果接口是GET请求的话，可以把这里设置为GET
 * @returns
 */
const filedownload = (path,data,name, payload, sendType = 'POST') => {
    let params = [], url = '', k, xhr;
    for(k in data){
        params.push(k+'='+data[k])
    }
    if(path.substr(0,4) !== 'http') {
        url = saasconfig.baseURL
    }
    if(!lodash.isEmpty(data)) {
        url = url + path+'?'+(params.length>1?params.join('&'):params[0]);
    } else {
        url = url + path
    }
    return new Promise(function(resolve, reject) {
        xhr = new XMLHttpRequest()
        xhr.open(sendType, url, true);
        xhr.responseType = 'arraybuffer';
        xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");
        xhr.onload = function() {
            if (this.status === 200) {
                let filename;
                if (!name) {//当存在 filename 时，取filename 并进行解码（为了解决中文乱码问题）
                    filename = xhr.getResponseHeader("Content-Disposition").split(";")[1].split("fileName=")[1];
                    filename = decodeURI(filename);
                }
                filename = name ? name : filename;

                let type = xhr.getResponseHeader('Content-Type');
                if (~xhr.getResponseHeader('Content-Type').indexOf('force-download')) {
                    let blob = new Blob([this.response], { type: type });
                    if (typeof window.navigator.msSaveBlob !== 'undefined') {
                        // IE workaround for "HTML7007: One or more blob URLs were revoked by closing the blob for which they were created. These URLs will no longer resolve as the data backing the URL has been freed."
                        window.navigator.msSaveBlob(blob, filename);
                    } else {
                        let URL = window.URL || window.webkitURL;
                        let downloadUrl = URL.createObjectURL(blob);
                        if (filename) {
                            // use HTML5 a[download] attribute to specify filename
                            var a = document.createElement("a");
                            // safari doesn't support this yet
                            if (typeof a.download === 'undefined') {
                                window.location = downloadUrl;
                            } else {
                                a.href = downloadUrl;
                                a.download = filename;
                                document.body.appendChild(a);
                                a.click();
                            }
                        } else {
                            window.location = downloadUrl;
                        }
                        setTimeout(function() { URL.revokeObjectURL(downloadUrl); }, 100); // cleanup
                    }
                    resolve(true)
                } else {
                    resolve(false)
                }
            }
        }
        xhr.setRequestHeader('JWTToken', getStore('authToken'));
        xhr.setRequestHeader('appName', 'peace');
        xhr.setRequestHeader('cType', 'PC');
        // xhr.send()
        xhr.send(JSON.stringify(payload));
    })
}
export default filedownload
