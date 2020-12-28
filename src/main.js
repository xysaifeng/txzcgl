import Vue from 'vue'

import Cookies from 'js-cookie'

import 'normalize.css/normalize.css' // a modern alternative to CSS resets

import Element from 'element-ui'
import './styles/element-variables.scss'

import '@/styles/index.scss' // global css

import App from './App'
import store from './store'
import router from './router'
import { sync } from 'vuex-router-sync'

import './icons' // icon
import './permission' // permission control
import './utils/error-log' // error log

import * as filters from './filters' // global filters

import { changePageStyle } from '@/utils'
// 将换肤的样式表引入
import '@/assets/custom-theme/theme/theme_blue.scss' // 蓝色
import '@/assets/custom-theme/theme/theme_pink.scss' // 粉色
import '@/assets/custom-theme/theme/theme_green.scss' // 绿色

/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online ! ! !
 */
if (process.env.NODE_ENV === 'production') {
  const { mockXHR } = require('../mock')
  mockXHR()
}

// 网站渲染时，获取本地存储的风格样式
const customClass = localStorage.getItem('customClass')
changePageStyle(document.body, customClass)

Vue.use(Element, {
  size: Cookies.get('size') || 'medium' // set element-ui default size
})

// register global utility filters
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = false

sync(store, router)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
