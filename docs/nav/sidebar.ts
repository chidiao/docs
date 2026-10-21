import type { DefaultTheme } from 'vitepress'

import { items as skills } from '../skills/sidebar.ts'

const collection: DefaultTheme.SidebarItem[] = [
  {
    text: '收藏夹',
    items: [
      { text: '总览', link: '/nav/' },
      { text: '资源', link: '/nav/resource' },
      { text: '软件', link: '/nav/software' }
    ]
  },
  {
    text: '开发',
    items: [
      { text: '开发工具', link: '/nav/develop' },
      { text: '前端资源', link: '/nav/frontend' },
      { text: 'IDE 插件', link: '/nav/ide-plugin' },
      { text: '项目', link: '/nav/project' }
    ]
  }
]

const items: DefaultTheme.SidebarItem[] = [...collection, ...skills]

export default {
  '/nav/': items,
  '/skills/': items
} satisfies DefaultTheme.Sidebar
