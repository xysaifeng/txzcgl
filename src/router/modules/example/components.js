/** When your routing table is too long, you can split it into small modules **/

import InContentLayout from '@/layout/inContent'

const componentsRouter = {
  path: '/components',
  component: InContentLayout,
  redirect: 'noRedirect',
  name: 'ComponentDemo',
  meta: {
    title: '组件',
    icon: 'component'
  },
  children: [
    {
      path: 'tinymce',
      component: () => import('@/views/example-pages/components-demo/tinymce'),
      name: 'TinymceDemo',
      meta: { title: '富文本编辑器', noCache: false }
    },
    {
      path: 'markdown',
      component: () => import('@/views/example-pages/components-demo/markdown'),
      name: 'MarkdownDemo',
      meta: { title: '纯文本编辑器', noCache: true }
    },
    {
      path: 'json-editor',
      component: () => import('@/views/example-pages/components-demo/json-editor'),
      name: 'JsonEditorDemo',
      meta: { title: 'JSON 编辑器' }
    },
    {
      path: 'split-pane',
      component: () => import('@/views/example-pages/components-demo/split-pane'),
      name: 'SplitpaneDemo',
      meta: { title: '分割面板' }
    },
    {
      path: 'avatar-upload',
      component: () => import('@/views/example-pages/components-demo/avatar-upload'),
      name: 'AvatarUploadDemo',
      meta: { title: '上传头像' }
    },
    {
      path: 'dropzone',
      component: () => import('@/views/example-pages/components-demo/dropzone'),
      name: 'DropzoneDemo',
      meta: { title: '上传图片' }
    },
    {
      path: 'sticky',
      component: () => import('@/views/example-pages/components-demo/sticky'),
      name: 'StickyDemo',
      meta: { title: '定位粘贴' }
    },
    {
      path: 'count-to',
      component: () => import('@/views/example-pages/components-demo/count-to'),
      name: 'CountToDemo',
      meta: { title: '动态计数' }
    },
    {
      path: 'mixin',
      component: () => import('@/views/example-pages/components-demo/mixin'),
      name: 'ComponentMixinDemo',
      meta: { title: '组件混合' }
    },
    {
      path: 'back-to-top',
      component: () => import('@/views/example-pages/components-demo/back-to-top'),
      name: 'BackToTopDemo',
      meta: { title: '回到顶部' }
    },
    {
      path: 'drag-dialog',
      component: () => import('@/views/example-pages/components-demo/drag-dialog'),
      name: 'DragDialogDemo',
      meta: { title: '拖拽对话框' }
    },
    {
      path: 'drag-select',
      component: () => import('@/views/example-pages/components-demo/drag-select'),
      name: 'DragSelectDemo',
      meta: { title: '拖拽下拉框' }
    },
    {
      path: 'dnd-list',
      component: () => import('@/views/example-pages/components-demo/dnd-list'),
      name: 'DndListDemo',
      meta: { title: '拖放列表' }
    },
    {
      path: 'drag-kanban',
      component: () => import('@/views/example-pages/components-demo/drag-kanban'),
      name: 'DragKanbanDemo',
      meta: { title: '拖拽看板' }
    }
  ]
}

export default componentsRouter
