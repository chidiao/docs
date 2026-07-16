import type { DefaultTheme } from 'vitepress'

import utils from './utils/sidebar'

const items: DefaultTheme.SidebarItem[] = [
  {
    text: 'Vue',
    items: [
      { text: 'v-for 和 v-if', link: '/vue/v-for-if' },
      { text: 'ref 和 reactive', link: '/vue/ref' },
      { text: 'computed 和 watch', link: '/vue/cw' },
      { text: '生命周期', link: '/vue/cycle' },
      { text: '指令', link: '/vue/directives' },
      { text: '修饰符', link: '/vue/modifier' },
      { text: '问题', link: '/vue/qa' }
    ]
  },
  {
    items: [
      { text: '组件', link: '/vue/components' },
      { text: 'Props', link: '/vue/props' },
      { text: 'Emits', link: '/vue/emits' },
      { text: 'Slot', link: '/vue/slot' },
      { text: 'v-model', link: '/vue/v-model' }
    ]
  },
  {
    text: 'Style',
    items: [
      { text: 'Class & Style', link: '/vue/style' },
      { text: 'Scoped', link: '/vue/style/scoped' },
      { text: 'v-bind', link: '/vue/style/v-bind' },
      { text: 'Transition', link: '/vue/style/transition' },
      { text: 'TransitionGroup', link: '/vue/style/transitionGroup' }
    ]
  },
  {
    text: '配置',
    items: [{ text: 'proxy', link: '/vue/proxy' }]
  }
]

const sidebar: DefaultTheme.Sidebar = {
  '/vue/': items,
  ...utils
}

export default sidebar
