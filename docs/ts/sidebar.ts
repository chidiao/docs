import type { DefaultTheme } from 'vitepress'

const items: DefaultTheme.SidebarItem[] = [
  {
    text: 'Typescript',
    items: [
      { text: 'Index', link: '/ts/' },
      { text: '类型', link: '/ts/types/' }
    ]
  }
]

const sidebar: DefaultTheme.Sidebar = {
  '/ts/': items
}

export default sidebar
