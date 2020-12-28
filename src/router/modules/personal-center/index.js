/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'
// import InContentLayout from '@/layout/inContent'
// import InContentLayout from '@/layout/components/AppMain'

const elderlyOrgManageRouter = {
  path: '/personalCenter',
  // path: '/elderly-org-manage',
  component: Layout,
  // name: 'ElderlyOrgManage',
  name: 'personalCenter',
  meta: { title: '个人中心', icon: 'documentation', roles: ['admin', 'editor'] },
  children: [
    {
      path: '/personalCenter/myAssets',
      component: () => import('@/views/personalCenter/myAssets'),
      name: 'myAssets',
      meta: { title: '我的资产', icon: 'documentation', roles: ['admin', 'editor'] }
    },
    {
      path: '/personalCenter/todo',
      component: () => import('@/views/personalCenter/todo'),
      name: 'todo',
      meta: { title: '待办中心', icon: 'documentation',  roles: ['admin', 'editor'] },
      // hidden: true
    }
    
  ]
}

export default elderlyOrgManageRouter
