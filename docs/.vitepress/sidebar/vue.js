export function sidebarVue() {
  return [
    {
      text: 'Vue',
      collapsible: true,
      items: [
        { text: 'Start', link: '/vue/' },
        { text: 'state', link: '/vue/state' },
        { text: 'lifecycle', link: '/vue/lifecycle' },
        { text: 'components', link: '/vue/components' },
        { text: 'directives', link: '/vue/directives' },
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
