import type { DefaultTheme } from 'vitepress'

import { items as http } from './http/sidebar.ts'
import { items as snippets } from './snippets/sidebar.ts'
import { items as utils } from './utils/sidebar.ts'

const items: DefaultTheme.SidebarItem[] = [
  {
    text: 'JavaScript',
    items: [
      { text: '开始', link: '/js/' },
      { text: 'Bom', link: '/js/dom/bom' },
      { text: 'Dom', link: '/js/dom/dom' },
      { text: 'Event', link: '/js/event' },
      { text: 'Geometry', link: '/js/dom/geometry' },
      { text: 'Storage', link: '/js/storage' },
      { text: 'Async', link: '/js/async' },
      { text: 'Class', link: '/js/class' },
      { text: 'Module', link: '/js/module' },
      { text: 'Function', link: '/js/function' },
      { text: 'Window', link: '/js/window' },
      { text: 'Prototype', link: '/js/prototype' }
    ]
  },
  {
    text: 'Types',
    items: [
      { text: 'Types', link: '/js/types/' },
      { text: 'Number', link: '/js/types/number' },
      { text: 'Array', link: '/js/types/array' },
      { text: 'String', link: '/js/types/string' },
      { text: 'Object', link: '/js/types/object' },
      { text: 'Map', link: '/js/types/map' },
      { text: 'Set', link: '/js/types/set' }
    ]
  },
  {
    text: 'Extend',
    items: [{ text: 'Math', link: '/js/extend/math' }]
  },
  {
    text: '其他',
    items: [
      { text: '变量', link: '/js/var' },
      { text: '其他', link: '/js/other' },
      { text: 'Canvas', link: '/js/canvas' }
    ]
  }
]

const shared: DefaultTheme.SidebarItem[] = [...http, ...utils, ...snippets]

const sidebar: DefaultTheme.Sidebar = {
  '/js/': items,
  '/js/http/': shared,
  '/js/utils/': shared,
  '/js/snippets/': shared
}

export default sidebar
