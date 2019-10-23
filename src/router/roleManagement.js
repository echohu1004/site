const App = () => import('@/layout/AppSite.vue')
const RoleManage = () => import('@/views/roleManagement/roleManage.vue')
const RoleLimits = () => import('@/views/roleManagement/roleLimits.vue')
const UserManage = () => import('@/views/roleManagement/userManage')
const UserManagedetail = () => import('@/views/roleManagement/userManagedetail')

export default {
    path: '/roleManagement',
    component: App,
    redirect: '/roleManagement/roleManage',
    meta: {
        title: '账号管理',
        requireAuth: false, 
    },
    children: [{
            path: '/roleManage',
            component: RoleManage
        },
        {
            path: '/roleLimits',
            component: RoleLimits
        },
        {
            path: '/userManage',
            component: UserManage
        },
        {
            path: '/userManagedetail/:id',
            component: UserManagedetail
        },
    ]
}