import type { DefaultTheme } from 'vitepress'

const items: DefaultTheme.SidebarItem[] = [
  {
    text: 'Node.js',
    items: [
      { text: 'Node.js', link: '/node/node' },
      { text: 'package.json', link: '/node/package' },
      { text: 'Gulp', link: '/node/gulp' },
      { text: 'PostCSS', link: '/node/postcss' },
      { text: '包管理工具', link: '/node/pm' }
    ]
  },
  {
    text: 'Express',
    items: [{ text: 'Express', link: '/node/express' }]
  }
]

const sidebar: DefaultTheme.Sidebar = {
  '/node/': items
}

export default sidebar
