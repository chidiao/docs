import type { DefaultTheme } from 'vitepress'

const items: DefaultTheme.SidebarItem[] = [
  {
    text: 'Node',
    items: [
      { text: 'Node.js', link: '/node/node' },
      { text: 'package.json', link: '/node/package' },
      { text: 'Gulp', link: '/node/gulp' },
      { text: 'PostCSS', link: '/node/postcss' }
    ]
  }
]

const sidebar: DefaultTheme.Sidebar = {
  '/node/': items
}

export default sidebar
