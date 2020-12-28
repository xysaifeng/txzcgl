import router from './router'
import store from './store'
import { Message } from 'element-ui'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import { getToken } from '@/utils/auth' // get token from cookie
import getPageTitle from '@/utils/get-page-title'

NProgress.configure({ showSpinner: false }) // NProgress配置

const whiteList = ['/login', '/auth-redirect'] // 没有重定向白名单

router.beforeEach(async(to, from, next) => {
  // 开始进度条
  NProgress.start()

  // set page title
  // document.title = getPageTitle(to.meta.title)
  document.title = getPageTitle()

  // 确定用户是否已登录
  const hasToken = getToken()
  // console.log('hasToken===========', hasToken)

  if (hasToken) {
    if (to.path === '/login') {
      // 如果已登录，则重定向到主页
      next({ path: '/' })
      NProgress.done()
    } else {
      // 确定用户是否通过getInfo获得了他的权限角色
      const hasRoles = store.getters.roles && store.getters.roles.length > 0
      // console.log('hasRoles===', hasRoles)
      if (hasRoles) {
        next()
      } else {
        try {
          // 获取用户信息
          // 注意:角色必须是一个对象数组!例如:['admin']或，['developer'，'editor']
          const { roles } = await store.dispatch('user/getInfo')
          //console.log('获取用户信息--roles----', roles)

          // 根据角色生成可访问的路由映射
          const accessRoutes = await store.dispatch('permission/generateRoutes', roles)
          // console.log('根据角色生成可访问的路由映射--accessRoutes----', accessRoutes)

          // 动态添加可访问路由
          router.addRoutes(accessRoutes)

          // 破解方法，以确保addRoutes是完整的
          // 设置replace: true，这样导航就不会留下历史记录
          next({ ...to, replace: true })
        } catch (error) {
          // 删除token并转到登录页重新登录
          await store.dispatch('user/resetToken')
          Message.error(error || 'Has Error')
          next(`/login?redirect=${to.path}`)
          NProgress.done()
        }
      }
    }
  } else {
    /* 没有 token*/
    if (whiteList.indexOf(to.path) !== -1) {
      // 在免费登录白名单中，直接下一步
      next()
    } else {
      // 没有访问权限的其他页面被重定向到登录页面。
      next(`/login?redirect=${to.path}`)
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  // 完成进度条
  NProgress.done()
})
