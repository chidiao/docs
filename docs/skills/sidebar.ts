import type { DefaultTheme } from 'vitepress'

export const items: DefaultTheme.SidebarItem[] = [
  {
    text: 'Skills',
    items: [
      { text: '总览', link: '/skills/' },
      { text: '收藏', link: '/skills/bookmark/SKILL' },
      { text: '网站导航配置', link: '/skills/nav-sidebar/SKILL' },
      { text: '链接条目', link: '/skills/link-entry/SKILL' }
    ]
  }
]

export default { '/skills/': items } satisfies DefaultTheme.Sidebar
