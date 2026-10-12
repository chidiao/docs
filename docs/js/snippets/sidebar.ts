import type { DefaultTheme } from 'vitepress'

export const items: DefaultTheme.SidebarItem[] = [
  {
    text: 'Snippets',
    items: [
      { text: 'index', link: '/js/snippets/' },
      { text: 'tree', link: '/js/snippets/tree' }
    ]
  }
]

export default { '/js/snippets/': items } satisfies DefaultTheme.Sidebar
