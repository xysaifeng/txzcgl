/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'
// import InContentLayout from '@/layout/inContent'
// import InContentLayout from '@/layout/components/AppMain'

const elderlyOrgManageRouter = {
  path: '/assets-management',
  // path: '/elderly-org-manage',
  component: Layout,
  // name: 'ElderlyOrgManage',
  name: 'assetsManagement',
  meta: { title: '资产管理', icon: 'documentation', roles: ['admin', 'editor'] },
  children: [
    {
      path: '/assetsManagement/assetsQuery',
      component: () => import('@/views/assetsManagement/assetsQuery'),
      name: 'assetsQuery',
      meta: { title: '资产查询', icon: 'documentation', roles: ['admin', 'editor'] }
    },
    {
      path: '/assetsManagement/stockManagement',
      component: () => import('@/views/assetsManagement/stockManagement'),
      name: 'stockManagement',
      meta: { title: '库存管理', icon: 'documentation',  roles: ['admin', 'editor'] },
      // hidden: true
    },
    {
      path: '/assetsManagement/checkManagement',
      component: () => import('@/views/assetsManagement/checkManagement'),
      name: 'checkManagement',
      meta: { title: '盘点管理', icon: 'documentation',  roles: ['admin', 'editor'] },
      // hidden: true
    },
    {
      path: '/assetsManagement/dataExport',
      component: () => import('@/views/assetsManagement/dataExport'),
      name: 'dataExport',
      meta: { title: '数据导出', icon: 'documentation',  roles: ['admin', 'editor'] },
      // hidden: true
    }
    
  ]
}

export default elderlyOrgManageRouter
