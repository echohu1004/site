const App = () => import('@/layout/AppSite.vue')
const AccountIndex = () => import('@/views/topManager/account/index.vue')
const ProjectIndex = () => import('@/views/topManager/projectManage/projectIndex.vue')
const ProjectIndexOr = () => import('@/views/topManager/projectManage/projectIndexOr.vue')
const ProjectDetail = () => import('@/views/topManager/projectManage/projectDetail.vue')
const Attendance = () => import('@/views/topManager/projectManage/attendance.vue')
const EmployeeDetail = () => import('@/views/topManager/projectManage/employeeDetail.vue')
const VisitorInfo = () => import('@/views/topManager/projectManage/visitorInfo.vue')
const StaffManageIndex = () => import('@/views/topManager/staffManage/index.vue')
const ExamManageIndex = () => import('@/views/topManager/examManage/index.vue')
const ExamManageList = () => import('@/views/topManager/examManage/examList.vue')
const ExamManageToEdit = () => import('@/views/topManager/examManage/examToEdit.vue')
const ExamManageExerEdit = () => import('@/views/topManager/examManage/exerciseEdit.vue')
const ExamManageLearning = () => import('@/views/topManager/examManage/learningEdit.vue')
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
        },
        {
            path: '/examManageIndex', //考试管理
            component: ExamManageIndex
        }, {
            path: '/examManageList', //试题列表
            component: ExamManageList
        }, {
            path: '/examManageToEdit', //编辑试题
            component: ExamManageToEdit
        }, {
            path: '/exerciseEdit', //试卷习题编辑
            component: ExamManageExerEdit
        }, {
            path: '/learnigEdit', //编辑学习资料
            component: ExamManageLearning
        }
    ]
}