import type { DefaultTheme } from 'vitepress'

const items: DefaultTheme.SidebarItem[] = [
  {
    text: '个人',
    items: [
      { text: '总览', link: '/me/' },
      { text: '经历', link: '/me/experience' },
      { text: '简历', link: '/me/resume' },
      { text: '项目经验', link: '/me/project' }
    ]
  }
]

const sidebar: DefaultTheme.Sidebar = {
  '/me/': items
}

export default sidebar
