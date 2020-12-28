/** When your routing table is too long, you can split it into small modules **/

import InContentLayout from '@/layout/inContent'

const tableRouter = {
  path: '/table',
  component: InContentLayout,
  redirect: '/table/complex-table',
  name: 'Table',
  meta: {
    title: '表格',
    icon: 'table'
  },
  children: [
    {
      path: 'dynamic-table',
      component: () => import('@/views/example-pages/table/dynamic-table/index'),
      name: 'DynamicTable',
      meta: { title: '动态表格' }
    },
    {
      path: 'drag-table',
      component: () => import('@/views/example-pages/table/drag-table'),
      name: 'DragTable',
      meta: { title: '拖拽表格' }
    },
    {
      path: 'inline-edit-table',
      component: () => import('@/views/example-pages/table/inline-edit-table'),
      name: 'InlineEditTable',
      meta: { title: '行内编辑表格' }
    },
    {
      path: 'complex-table',
      component: () => import('@/views/example-pages/table/complex-table'),
      name: 'ComplexTable',
      meta: { title: '复杂表格' }
    }
  ]
}
export default tableRouter
