import type { DefaultTheme } from 'vitepress'

const items: DefaultTheme.SidebarItem[] = [
  {
    text: 'Snippets',
    items: [
      { text: 'index', link: '/js/snippets/' },
      { text: 'tree', link: '/js/snippets/tree' }
    ]
  }
]

const sidebar: DefaultTheme.Sidebar = {
  '/js/snippets/': items
}

export default sidebar
