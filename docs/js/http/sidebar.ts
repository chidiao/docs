import type { DefaultTheme } from 'vitepress'

const items: DefaultTheme.SidebarItem[] = [
  {
    text: 'Http',
    items: [
      { text: 'Status-Code', link: '/js/http/status-code' },
      { text: 'Content-Type', link: '/js/http/content-type' },
      { text: 'Method', link: '/js/http/method' }
    ]
  },
  {
    text: '跨域',
    items: [{ text: 'CORS', link: '/js/http/cors' }]
  },
  {
    text: 'Utils',
    items: [
      { text: 'axios', link: '/js/http/axios' },
      { text: 'ofetch', link: '/js/http/ofetch' }
    ]
  }
]

const sidebar: DefaultTheme.Sidebar = {
  '/js/http/': items
}

export default sidebar
