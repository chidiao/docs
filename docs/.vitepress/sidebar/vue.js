export function sidebarVue() {
  return [
    {
      text: 'Vue',
      items: [
        { text: '开始', link: '/vue/' },
        { text: '数据', link: '/vue/state' },
        { text: '生命周期', link: '/vue/lifecycle' },
        { text: '组件', link: '/vue/components' },
        { text: '指令', link: '/vue/directives' },
        { text: '样式', link: '/vue/style' },
        { text: 'qa', link: '/vue/qa' }
      ]
    },
    {
      text: '全家桶',
      items: [
        { text: 'Router', link: '/vue/router' },
        { text: 'Pinia', link: '/vue/pinia' },
        { text: 'Vuex', link: '/vue/vuex' },
        { text: 'antdv', link: '/vue/antdv' }
      ]
    }
  ]
}
