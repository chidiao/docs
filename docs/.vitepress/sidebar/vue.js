export function sidebarVue() {
  return [
    {
      text: 'Vue',
      items: [
        { text: '开始', link: '/vue/' },
        { text: '组件', link: '/vue/components' },
        { text: 'state', link: '/vue/state' },
        { text: 'ref 和 reactive', link: '/vue/ref' },
        { text: 'computed 和 watch', link: '/vue/cw' },
        { text: '生命周期', link: '/vue/cycle' },
        { text: '指令', link: '/vue/directives' },
        { text: '修饰符', link: '/vue/modifier' },
        { text: '样式', link: '/vue/style' },
        { text: '问题', link: '/vue/qa' }
      ]
    },
    {
      text: '全家桶',
      items: [
        { text: 'Router', link: '/vue/router' },
        { text: 'Vuex', link: '/vue/vuex' },
        { text: 'Pinia', link: '/vue/pinia' },
        { text: 'I18n', link: '/vue/i18n' }
      ]
    }
  ]
}
