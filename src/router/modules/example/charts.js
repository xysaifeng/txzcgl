/** When your routing table is too long, you can split it into small modules**/

import InContentLayout from '@/layout/inContent'

const chartsRouter = {
  path: '/charts',
  component: InContentLayout,
  redirect: 'noRedirect',
  name: 'Charts',
  meta: {
    title: '统计图',
    icon: 'chart'
  },
  children: [
    {
      path: 'keyboard',
      component: () => import('@/views/example-pages/charts/keyboard'),
      name: 'KeyboardChart',
      meta: { title: 'Keyboard Chart', noCache: true }
    },
    {
      path: 'line',
      component: () => import('@/views/example-pages/charts/line'),
      name: 'LineChart',
      meta: { title: 'Line Chart', noCache: true }
    },
    {
      path: 'mix-chart',
      component: () => import('@/views/example-pages/charts/mix-chart'),
      name: 'MixChart',
      meta: { title: 'Mix Chart', noCache: true }
    }
  ]
}

export default chartsRouter
