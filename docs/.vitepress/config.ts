import { defineConfig } from 'vitepress'
import nav from './nav.ts'
import sidebar from './sidebar.ts'
import UnoCSS from 'unocss/vite'

export default defineConfig({
  lang: 'zh',
  title: 'MyDocs',
  description: 'Code',

  vite: {
    plugins: [UnoCSS()]
  },

  themeConfig: {
    siteTitle: 'MyDocs',
    logo: '/logo.jpg',
    outline: { level: [2, 3], label: 'On this page' },
    nav: nav,
    sidebar: sidebar,
    editLink: {
      pattern: 'https://github.com/chidiao/mydocs/tree/main/docs/:path',
      text: 'View on GitHub'
    }
  }
})
