const App = () => import('@/layout/AppSite.vue')
const AccountIndex = () => import('@/views/topManager/account/index.vue')
const ProjectIndex = () => import('@/views/topManager/projectManage/projectIndex.vue')
const ProjectIndexOr = () => import('@/views/topManager/projectManage/projectIndexOr.vue')
const ProjectDetail = () => import('@/views/topManager/projectManage/projectDetail.vue')
const Attendance = () => import('@/views/topManager/projectManage/attendance.vue')
const EmployeeDetail = () => import('@/views/topManager/projectManage/employeeDetail.vue')
const VisitorInfo = () => import('@/views/topManager/projectManage/visitorInfo.vue')
const StaffManageIndex = () => import('@/views/topManager/staffManage/index.vue')
export default {
    path: '/accountIndex',
    component: App,
    redirect: '',
    meta: {
        title: '账户首页',
        requireAuth: false,
    },
    children: [{
            path: '/accountIndex',
            component: AccountIndex
        },
        {
            path: '/projectIndex',
            component: ProjectIndex
        },
        {
            path: '/projectIndexOr',
            component: ProjectIndexOr
        },
        {
            path: '/projectDetail',
            component: ProjectDetail
        },
        {
            path: '/attendance',
            component: Attendance
        },
        {
            path: '/employeeDetail',
            component: EmployeeDetail
        },
        {
            path: '/visitorInfo',
            component: VisitorInfo
        },
        {
            path: '/staffManageIndex',
            component: StaffManageIndex
        }
    ]
}