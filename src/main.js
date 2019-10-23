import Vue from 'vue'
import App from './App.vue'
// import router from './router'
import router from '@/router/index.js'
import ElementUI from 'element-ui'
import '@/common/scss/element-variables.scss'
import { getStore, setStore, getStoreSession } from '@/utils/utils.js'

/* IE下提示Promise未定义的解决方法 */
if (!window.Promise) {
    window.Promise = Promise;
}

Vue.use(ElementUI)
Vue.config.productionTip = false
router.beforeEach((to, from, next) => {
    if (to.meta.title) {
        document.title = to.meta.title;
    }
    if (to.matched.some(record => record.meta.requireAuth)) { // 判断该路由是否需要登录权限
        let logininfouser = JSON.parse(getStore('loginInfouser'));
        if (getStoreSession('haslogin') == 'yes') { // 判断是否登录
            var menuAdmin
            if (logininfouser) {
                if (logininfouser.userRoles[0].roleType === 'SUPER_ADMIN') {
                    menuAdmin = true
                } else {
                    menuAdmin = false
                    if (to.fullPath.indexOf('/userManagement') >= 0) {
                        next({
                            path: '/mediationRoomList'
                        })
                    }
                }
                setStore('menuAdmin', menuAdmin)
                next();
            } else {
                next({
                    path: '/login',
                    query: {
                        redirect: to.fullPath
                    } // 将跳转的路由path作为参数，登录成功后跳转到该路由
                })
            }
        } else {
            next({
                path: '/login',
                query: {
                    redirect: to.fullPath
                } // 将跳转的路由path作为参数，登录成功后跳转到该路由
            })
        }
    } else {
        next();
    }
});

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')