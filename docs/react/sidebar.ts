import type { DefaultTheme } from 'vitepress'

const items: DefaultTheme.SidebarItem[] = [
  {
    text: 'React',
    items: [
      { text: '开始', link: '/react/' },
      { text: '组件', link: '/react/component' },
      { text: 'Class', link: '/react/class' },
      { text: 'Hook', link: '/react/hook' },
      { text: 'Router', link: '/react/router' },
      { text: 'Redux', link: '/react/redux' },
      { text: 'Antd', link: '/react/antd' }
    ]
  }
]

const sidebar: DefaultTheme.Sidebar = {
  '/react/': items
}

export default sidebar
