export function sidebarVue() {
  return [
    {
      text: 'Vue',
      collapsible: true,
      items: [
        { text: '开始', link: '/vue/' },
        { text: '数据', link: '/vue/state' },
        { text: '生命周期', link: '/vue/lifecycle' },
        { text: '组件', link: '/vue/components' },
        { text: '指令', link: '/vue/directives' },
        { text: 'style', link: '/vue/style' },
        { text: 'qa', link: '/vue/qa' }
      ]
    },
    {
      text: '全家桶',
      items: [
        { text: 'Vite', link: '/vue/vite/' },
        { text: 'Router', link: '/vue/vite/router' },
        { text: 'Pinia', link: '/vue/vite/pinia' },
        { text: 'Vuex', link: '/vue/vite/vuex' }
      ]
    },
    {
      text: 'Utils',
      items: [
        { text: 'utils', link: '/vue/utils/' },
        { text: 'antdv', link: '/vue/utils/antdv' }
      ]
    }
  ]
}
