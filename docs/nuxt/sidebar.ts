import type { DefaultTheme } from 'vitepress'

const items: DefaultTheme.SidebarItem[] = [
  {
    text: 'Nuxt',
    items: [
      { text: 'Start', link: '/nuxt/' },
      { text: 'fetch', link: '/nuxt/fetch' },
      { text: 'i18n', link: '/nuxt/i18n' }
    ]
  },
  {
    text: 'Dir',
    items: [
      { text: 'assets', link: '/nuxt/assets' },
      { text: 'auto-imports', link: '/nuxt/auto-imports' },
      { text: 'pages', link: '/nuxt/pages' }
    ]
  }
]

const sidebar: DefaultTheme.Sidebar = {
  '/nuxt/': items
}

export default sidebar
