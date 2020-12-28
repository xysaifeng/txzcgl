/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'
import InContentLayout from '@/layout/inContent'

const elderlyOrgManageRouter = {
  path: '/system-manage',
  component: Layout,
  name: 'SystemManage',
  meta: {
    title: '系统管理',
    icon: 'documentation',
    roles: ['admin'] // or you can only set roles in sub nav
  },

      children: [
        {
          path: 'index',
          component: () => import('@/views/system-manage/authority-manage/index'),
          name: 'AuthorityManage',
          meta: { title: '权限管理', icon: 'documentation', affix: false }
        },
        {
          path: 'index2',
          component: () => import('@/views/system-manage/authority-manage/index2'),
          name: 'AuthorityManage2',
          meta: { title: '权限管理2', icon: 'documentation', affix: false }
        }
      ]
}

export default elderlyOrgManageRouter
