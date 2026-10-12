import type { DefaultTheme } from 'vitepress'

import { items as dart } from '../dart/sidebar.ts'
import { items as getx } from '../getx/sidebar.ts'

const flutter: DefaultTheme.SidebarItem[] = [
  {
    text: 'Flutter',
    items: [
      { text: '安装', link: '/flutter/install' },
      { text: '路由', link: '/flutter/route' }
    ]
  },
  {
    text: 'Widgets',
    items: [{ text: 'ListView', link: '/flutter/listview' }]
  }
]

const items: DefaultTheme.SidebarItem[] = [...flutter, ...dart, ...getx]

export default {
  '/flutter/': items,
  '/dart/': items,
  '/getx/': items
} satisfies DefaultTheme.Sidebar
