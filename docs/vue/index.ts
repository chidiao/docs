import utils from './utils'

export default {
  ...utils,
  '/vue/': [
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
      text: 'Styles',
      items: [
        { text: 'CSS', link: '/vue/css' },
        { text: 'Transition', link: '/vue/transition' },
        { text: 'TransitionGroup', link: '/vue/transitionGroup' }
      ]
    },
    {
      text: '配置',
      items: [{ text: 'proxy', link: '/vue/proxy' }]
    }
  ]
}
