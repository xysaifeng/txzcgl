import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'
import InContentLayout from '@/layout/inContent'

/* Router Modules */
import componentsRouter from './modules/example/components'
import chartsRouter from './modules/example/charts'
import tableRouter from './modules/example/table'
import nestedRouter from './modules/example/nested'

/* 养老服务机构管理router */
import elderlyOrgManageRouter from './modules/elderly-org-manage'

import purchaseManagementRouter from './modules/purchase-management'
import personaleCenterRouter from './modules/personal-center'
import assetsManagementRouter from './modules/assets-management'

/* 系统管理router */
import systemManageRouter from './modules/system-manage'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    noCache: true                if set true, the page will no be cached(default is false)
    affix: true                  if set true, the tag will affix in the tags-view
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/example-pages/redirect/index')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/example-pages/login/index'),
    hidden: true
  },
  {
    path: '/auth-redirect',
    component: () => import('@/views/example-pages/login/auth-redirect'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/example-pages/error-page/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/example-pages/error-page/401'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/example-pages/dashboard/index'),
        name: 'Dashboard',
        meta: { title: '首页', icon: 'dashboard', affix: true }
      }
    ]
  }
]

/**
 * asyncRoutes
 * 需要根据用户角色动态加载的路由
 */
export const asyncRoutes = [
  {
    path: '/standard-component',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/standard-component/index'),
        name: 'StandardComponent',
        meta: { title: '标准化组件参照', icon: 'documentation', affix: false }
      }
    ]
  },
  elderlyOrgManageRouter,
  systemManageRouter,
  purchaseManagementRouter,
  personaleCenterRouter,
  assetsManagementRouter,
  {
    path: '/example-pages',
    component: Layout,
    name: 'ExamplePages',
    meta: {
      title: '案例页面',
      icon: 'documentation',
      roles: ['admin', 'editor'] // or you can only set roles in sub nav
    },
    children: [
      {
        path: '/a_demo/index',
        component: () => import('@/views/example-pages/a_demo/index'),
        name: 'Demo',
        meta: { title: '二级菜单-demo', icon: 'documentation' },
        children: [
          {
            path: '/a_demo/demo1/index',
            component: () => import('@/views/example-pages/a_demo/demo1/index'),
            name: 'Demo1',
            meta: { title: '三级菜单-1-admin', icon: 'documentation', roles: ['admin'] }
          },
          {
            path: '/a_demo/demo2/index',
            component: () => import('@/views/example-pages/a_demo/demo2/index'),
            name: 'Demo2',
            meta: { title: '三级菜单-2-editor', icon: 'documentation', roles: ['editor'] }
          }
        ]
      },
      {
        path: '/documentation',
        component: InContentLayout,
        // component: { render: h => h('router-view') }, // 用此方法做二级以下路由的跳转也可以
        children: [
          {
            path: 'index',
            component: () => import('@/views/example-pages/documentation/index'),
            name: 'Documentation',
            meta: { title: '说明书', icon: 'documentation', affix: false }
          }
        ]
      },
      {
        path: '/guide',
        component: InContentLayout,
        redirect: '/guide/index',
        children: [
          {
            path: 'index',
            component: () => import('@/views/example-pages/guide/index'),
            name: 'Guide',
            meta: { title: '使用指南', icon: 'guide', noCache: true }
          }
        ]
      },
      {
        path: '/permission',
        component: InContentLayout,
        redirect: '/permission/page',
        alwaysShow: true, // will always show the root menu
        name: 'Permission',
        meta: {
          title: '权限',
          icon: 'lock',
          roles: ['admin', 'editor'] // you can set roles in root nav
        },
        children: [
          {
            path: 'page',
            component: () => import('@/views/example-pages/permission/page'),
            name: 'PagePermission',
            meta: {
              title: '页面权限',
              roles: ['admin'] // or you can only set roles in sub nav
            }
          },
          {
            path: 'directive',
            component: () => import('@/views/example-pages/permission/directive'),
            name: 'DirectivePermission',
            meta: {
              title: '菜单权限',
              roles: ['admin', 'editor']
              // if do not set roles, means: this page does not require permission
            }
          },
          {
            path: 'role',
            component: () => import('@/views/example-pages/permission/role'),
            name: 'RolePermission',
            meta: {
              title: '角色权限',
              roles: ['admin']
            }
          }
        ]
      },
      {
        path: '/icon',
        component: InContentLayout,
        children: [
          {
            path: 'index',
            component: () => import('@/views/example-pages/icons/index'),
            name: 'Icons',
            meta: { title: '图标', icon: 'icon', noCache: true }
          }
        ]
      },
      /** when your routing map is too long, you can split it into small modules **/
      componentsRouter,
      chartsRouter,
      nestedRouter,
      tableRouter,
      {
        path: '/example',
        component: InContentLayout,
        redirect: '/example/list',
        name: 'Example',
        meta: {
          title: '例子',
          icon: 'example'
        },
        children: [
          {
            path: 'create',
            component: () => import('@/views/example-pages/example/create'),
            name: 'CreateArticle',
            meta: { title: '创建文章', icon: 'edit' }
          },
          {
            path: 'edit/:id(\\d+)',
            component: () => import('@/views/example-pages/example/edit'),
            name: 'EditArticle',
            meta: { title: '编辑文章', noCache: true, activeMenu: '/example/list' },
            hidden: true
          },
          {
            path: 'list',
            component: () => import('@/views/example-pages/example/list'),
            name: 'ArticleList',
            meta: { title: '文章列表', icon: 'list' }
          }
        ]
      },
      {
        path: '/tab',
        component: InContentLayout,
        children: [
          {
            path: 'index',
            component: () => import('@/views/example-pages/tab/index'),
            name: 'Tab',
            meta: { title: '表格2', icon: 'tab' }
          }
        ]
      },
      {
        path: '/error',
        component: InContentLayout,
        redirect: 'noRedirect',
        name: 'ErrorPages',
        meta: {
          title: '错误页面',
          icon: '404'
        },
        children: [
          {
            path: '401',
            component: () => import('@/views/example-pages/error-page/401'),
            name: 'Page401',
            meta: { title: '401', noCache: true }
          },
          {
            path: '404',
            component: () => import('@/views/example-pages/error-page/404'),
            name: 'Page404',
            meta: { title: '404', noCache: true }
          }
        ]
      },

      {
        path: '/error-log',
        component: InContentLayout,
        children: [
          {
            path: 'log',
            component: () => import('@/views/example-pages/error-log/index'),
            name: 'ErrorLog',
            meta: { title: '错误日志', icon: 'bug' }
          }
        ]
      },

      {
        path: '/excel',
        component: InContentLayout,
        redirect: '/excel/export-excel',
        name: 'Excel',
        meta: {
          title: 'Excel',
          icon: 'excel'
        },
        children: [
          {
            path: 'export-excel',
            component: () => import('@/views/example-pages/excel/export-excel'),
            name: 'ExportExcel',
            meta: { title: '导出Excel' }
          },
          {
            path: 'export-selected-excel',
            component: () => import('@/views/example-pages/excel/select-excel'),
            name: 'SelectExcel',
            meta: { title: '导出勾选的Excel' }
          },
          {
            path: 'export-merge-header',
            component: () => import('@/views/example-pages/excel/merge-header'),
            name: 'MergeHeader',
            meta: { title: '合并Excel表头' }
          },
          {
            path: 'upload-excel',
            component: () => import('@/views/example-pages/excel/upload-excel'),
            name: 'UploadExcel',
            meta: { title: '上传Excel' }
          }
        ]
      },

      {
        path: '/zip',
        component: InContentLayout,
        redirect: '/zip/download',
        alwaysShow: true,
        name: 'Zip',
        meta: { title: 'Zip压缩', icon: 'zip' },
        children: [
          {
            path: 'download',
            component: () => import('@/views/example-pages/zip/index'),
            name: 'ExportZip',
            meta: { title: 'Export Zip' }
          }
        ]
      },

      {
        path: '/pdf',
        component: InContentLayout,
        redirect: '/pdf/index',
        children: [
          {
            path: 'index',
            component: () => import('@/views/example-pages/pdf/index'),
            name: 'PDF',
            meta: { title: 'PDF', icon: 'pdf' }
          }
        ]
      },
      {
        path: '/pdf/download',
        component: () => import('@/views/example-pages/pdf/download'),
        hidden: true
      },

      {
        path: '/theme',
        component: InContentLayout,
        children: [
          {
            path: 'index',
            component: () => import('@/views/example-pages/theme/index'),
            name: 'Theme',
            meta: { title: '主题色', icon: 'theme' }
          }
        ]
      },

      {
        path: '/clipboard',
        component: InContentLayout,
        children: [
          {
            path: 'index',
            component: () => import('@/views/example-pages/clipboard/index'),
            name: 'ClipboardDemo',
            meta: { title: '剪切板', icon: 'clipboard' }
          }
        ]
      },

      {
        path: 'external-link',
        component: InContentLayout,
        children: [
          {
            path: 'https://github.com/PanJiaChen/vue-element-admin',
            meta: { title: '跳转外部链接', icon: 'link' }
          }
        ]
      }
    ]
  },
  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  mode: 'history', // 需要服务支持
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
