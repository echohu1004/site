const App = () => import('@/layout/AppSite.vue')
const EquipmentManage = () => import('@/views/equipmentManagement/equipmentManage.vue')

export default {
    path: '/equipmentManagement',
    component: App,
    redirect: '',
    meta: {
        title: '设备管理',
        requireAuth: false, // 添加该字段，表示进入这个路由是需要登录的
    },
    children: [{
            path: '/equipmentManage',
            component: EquipmentManage
        },
        {
            path: '/equipmentManage',
            component: EquipmentManage
        }
    ]
}