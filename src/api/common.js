import http from '@/server/httpServer.js'

/* 地区信息查询 */
export const searchAreasInfo = (data) => {
    return http({
        url: '/peace/area/searchAreasInfo',
        method: 'post'
    }, data)
}

/* 选择调解机构 */
export const getMediateOrganizationList = (data) => {
    return http({
        url: '/peace/organization/getMediateOrganizationList',
        method: 'post'
    }, data)
}

/* 获取字典信息 */
export const searchDictionaryInfo = (data) => {
    return http({
        url: '/peace/dictionary/searchDictionaryInfo',
        method: 'post'
    }, data)
}

