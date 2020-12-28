/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'
// import InContentLayout from '@/layout/inContent'
// import InContentLayout from '@/layout/components/AppMain'

const elderlyOrgManageRouter = {
  path: '/purchaseManagement',
  // path: '/elderly-org-manage',
  component: Layout,
  // name: 'ElderlyOrgManage',
  name: 'purchaseManagement',
  meta: { title: '采购管理', icon: 'documentation', roles: ['admin', 'editor'] },
  children: [
    {
      path: '/purchase/apply',
      component: () => import('@/views/purchaseManagement/apply'),
      name: 'apply',
      meta: { title: '采购申请', icon: 'documentation', roles: ['admin', 'editor'] }
    },
    {
      path: '/purchase/records',
      component: () => import('@/views/purchaseManagement/records'),
      name: 'records',
      meta: { title: '采购记录查询', icon: 'documentation',  roles: ['admin', 'editor'] },
      // hidden: true
    },
    {
      path: '/purchase/orderExport',
      component: () => import('@/views/purchaseManagement/orderExport'),
      name: 'orderExport',
      meta: { title: '采购单导出', icon: 'documentation', roles: ['admin', 'editor'] }
    }
    
  ]
}

export default elderlyOrgManageRouter
