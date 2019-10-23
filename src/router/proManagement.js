const App = () => import('@/layout/AppSite.vue')
const RoleManage = () => import('@/views/roleManagement/roleManage.vue')
const RoleLimits = () => import('@/views/roleManagement/roleLimits.vue')

export default {
    path: '/roleManagement',
    component: App,
    redirect: '/roleManagement/roleManage',
    meta: {
        title: '账号管理',
        requireAuth: false, // 添加该字段，表示进入这个路由是需要登录的
    },
    children: [{
            path: '/roleManage',
            component: RoleManage
        },
        {
            path: '/roleLimits',
            component: RoleLimits
        },
    ]
}