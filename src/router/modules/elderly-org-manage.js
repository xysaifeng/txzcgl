/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'
// import InContentLayout from '@/layout/inContent'
// import InContentLayout from '@/layout/components/AppMain'

const elderlyOrgManageRouter = {
  path: '/elderly-org-manage',
  component: Layout,
  name: 'ElderlyOrgManage',
  meta: { title: '养老服务机构管理', icon: 'documentation', roles: ['admin', 'editor'] },
  children: [
    {
      path: '/day-care-centre/index',
      component: () => import('@/views/elderly-org-manage/day-care-centre/index'),
      name: 'DayCareCentre',
      meta: { title: '日间照护中心', icon: 'documentation', roles: ['admin', 'editor'] }
    },
    {
      path: '/day-care-centre/details/:id',
      component: () => import('@/views/elderly-org-manage/day-care-centre/details'),
      name: 'DayCareCentreDetails',
      meta: { title: '日间照护中心', icon: 'documentation' },
      hidden: true
    },
    {
      path: '/help-meals/index',
      component: () => import('@/views/elderly-org-manage/help-meals/index'),
      name: 'HelpMeals',
      meta: { title: '老年助餐服务场所', icon: 'documentation', roles: ['admin', 'editor'] }
    },
    {
      path: '/help-meals/details/:id',
      component: () => import('@/views/elderly-org-manage/help-meals/details'),
      name: 'HelpMealsDetails',
      meta: { title: '老年助餐服务场所详情', icon: 'documentation' },
      hidden: true
    }
  ]
}

export default elderlyOrgManageRouter
