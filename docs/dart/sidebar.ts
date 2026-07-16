import type { DefaultTheme } from 'vitepress'

const items: DefaultTheme.SidebarItem[] = [
  {
    text: 'Dart',
    items: [
      { text: '变量', link: '/dart/var' },
      { text: '数据类型', link: '/dart/datatype' },
      { text: 'Class', link: '/dart/class' },
      { text: 'Model', link: '/dart/model' },
      { text: 'Function', link: '/dart/function' }
    ]
  },
  {
    text: 'Pub',
    items: [
      { text: 'EasyRefresh', link: '/dart/easyRefresh' },
      { text: 'SmartDialog', link: '/dart/smartDialog' },
      { text: 'NetworkImage', link: '/dart/networkImage' }
    ]
  }
]

const sidebar: DefaultTheme.Sidebar = {
  '/dart/': items
}

export default sidebar
