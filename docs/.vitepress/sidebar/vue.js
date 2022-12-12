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
      text: 'Utils',
      items: [
        { text: 'Vite', link: '/vue/utils/vite' },
        { text: 'utils', link: '/vue/utils/' },
        { text: 'antdv', link: '/vue/utils/antdv' }
      ]
    },
    {
      text: 'Router',
      items: [{ text: 'router', link: '/vue/router/' }]
    },
    {
      text: 'Pinia',
      items: [
        { text: 'pinia', link: '/vue/pinia/' },
        { text: 'vuex', link: '/vue/pinia/vuex' }
      ]
    }
  ]
}
