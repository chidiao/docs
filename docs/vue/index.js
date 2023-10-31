export default function () {
  return [
    {
      text: 'Vue',
      items: [
        { text: 'ref 和 reactive', link: '/vue/ref' },
        { text: 'computed 和 watch', link: '/vue/cw' },
        { text: '生命周期', link: '/vue/cycle' },
        { text: '指令', link: '/vue/directives' },
        { text: '修饰符', link: '/vue/modifier' },
        { text: '样式', link: '/vue/style' },
        { text: 'v-for', link: '/vue/v-for' },

        { text: '问题', link: '/vue/qa' }
      ]
    },
    {
      text: '组件',
      items: [
        { text: '组件', link: '/vue/components' },
        { text: 'Props', link: '/vue/props' },
        { text: 'Emits', link: '/vue/emits' },
        { text: 'Slot', link: '/vue/slot' },
        { text: 'v-model', link: '/vue/vmodel' }
      ]
    },
    {
      text: '动画',
      items: [
        { text: 'Transition', link: '/vue/transition' },
        { text: 'TransitionGroup', link: '/vue/transitionGroup' }
      ]
    },
    {
      text: '全家桶',
      items: [
        { text: 'Vuex', link: '/vue/vuex' },
        { text: 'Pinia', link: '/vue/pinia' },
        { text: 'Router', link: '/vue/router' },
        { text: 'Bak', link: '/vue/bak' }
      ]
    }
  ]
}
