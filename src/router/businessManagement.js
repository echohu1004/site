const App = () => import('@/layout/AppSite.vue')
const BusinessManage = () => import('@/views/businessManagement/businessManage.vue')
const BusinessDetail = () => import('@/views/businessManagement/businessDetail.vue')

export default {
    path: '/businessManagement',
    component: App,
    redirect: '/businessManagement/businessManage',
    meta: {
        title: '企业管理',
        requireAuth: false, // 添加该字段，表示进入这个路由是需要登录的
    },
    children: [{
            path: '/businessManage',
            component: BusinessManage
        },
        {
            path: '/businessDetail',
            component: BusinessDetail
        },
    ]
}