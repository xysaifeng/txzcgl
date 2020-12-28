/**
* 项目中公共的接口
*/
import axios from 'axios'
import {getToken} from '@/utils/auth'
import request from '@/utils/request'

/**
 * 查询表格List数据
 * @param {object} data
 * @param {number | string} pageNo
 * @param {number | string} pageSize
 */
export function searchTableData(data,pageNo,pageSize) {
  return request({
    url: `/institutionBasicInfo/v1/institutionBasicInfos?pageNo=${pageNo}&pageSize=${pageSize}`,
    method: 'post',
    data:data,
  })
}

/**
 * 删除表格List数据
 * @param {number|string} id
 */
export function removeTableData(id) {
  return request({
    url: `/institutionBasicInfo/v1/institutionBasicInfo/${id}`,
    method: 'delete'
  })
}

/**
 * 请求区域/街道/居委接口
 */
export function loadAreaStreetCommitteeApi() {
  return request({
    url: '/division/v1/getDivisionJson',
    method: 'get'
  })
}

/**
 * 如果本地缓存有区域街道的级联数据，则直接调用本地缓存的，否则调用接口
 */
export function loadAreaStreetCommittee() {
  return new Promise((resolve, reject) => {
    let has_response = JSON.parse(localStorage.getItem('areaStreetCommitteeTreeData'))
    if(has_response !== null){
      resolve(has_response)
    }
    else{
      loadAreaStreetCommitteeApi().then(response => {
        localStorage.setItem('areaStreetCommitteeTreeData',JSON.stringify(response))
        resolve(response)
      }).catch(() => {
        reject()
      })
    }
  })
}

/**
 * 校验机构名称的唯一性
 * @param {Object} data
 * data.name:机构名称 data.type：机构类型
 */
export function uniqueOrgName(data) {
  return request({
    url: '/institutionBasicInfo/v1/checkName',
    method: 'post',
    data:data
  })
}

/**
 * 删除服务器图片
 * @param {Object} data
 * data.fileType 文件类型;
 * data.fileName 文件名称;
 * data.isOpen 是公开文件 : 0不公开，1公开是否;
 */
export function removeFile(data) {
  return request({
    url: '/file/v1/deleteLocation',
    method: 'post',
    data:data
  })
}

/**
 * 获取服务器默认图片
 */
export function getDefaultImgUrl() {
  return request({
    url: '/file/v1/getDefaultImgPathLocation',
    method: 'get'
  })
}

/**
 * 下载图片，文件
 * @param {String} url  // 下载地址
 * @param {Object} data //参数
 * data:{
 *  mimeType:'', //文件的MIME type类型
    fileType:'',//文件类型 0图片 1文件
    fileName:'',//文件名
    isOpen:'' //是否公开 0不公开 1公开
 * }
 */
export function downloadFile(url,data) {
  axios({
    method: 'post',
    url: url,
    data: data,
    responseType: 'blob',
    headers: { 'Authorization': 'Bearer ' + getToken() }
  }).then(res => {
    resolveBlob(res, mimeMap[data.mimeType], data.fileName)
  }).catch(e=>{
    this.$message.error('文件预览失败')
  })
}

//文件类型
const mimeMap = {
  xlsx: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  zip: 'application/zip',
  jpg: 'image/jpg',
  jpeg: 'image/jpeg',
  png: 'image/png',
  pdf: 'application/pdf',
  doc: 'application/msword',
  docx: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
}

/**
 * 解析blob响应内容并下载
 * @param {*} res blob响应内容
 * @param {String} mimeType MIME类型
 */
export function resolveBlob(res, mimeType, fileName) {
  const aLink = document.createElement('a')
  var blob = new Blob([res.data], { type: mimeType })
  aLink.href = URL.createObjectURL(blob)
  aLink.setAttribute('download', fileName) // 设置下载文件名称
  document.body.appendChild(aLink)
  aLink.click()
  document.body.appendChild(aLink)
}
