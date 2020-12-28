/**
 * 【日间照护中心】 接口
 */
import request from '@/utils/request'

// 查看回显接口
export function lookFormData(id) {
    return request({
        url: `/dayCareCenter/v1/dayCareCenterDetail/${id}`,
        method: 'get'
    })
}

// 编辑回显接口
export function loadFormData(id) {
    return request({
        url: `/dayCareCenter/v1/dayCareCenter/${id}`,
        method: 'get'
    })
}

// 新增提交接口
export function submitFormData(data) {
    return request({
        url: '/dayCareCenter/v1/dayCareCenter',
        method: 'post',
        data: data
    })
}

// 编辑提交
export function submitEditFormData(data, id) {
    return request({
        url: `/dayCareCenter/v1/dayCareCenter/` + id,
        method: 'post',
        data: data
    })
}