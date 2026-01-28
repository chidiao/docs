import nav from './nav'
import sidebar from './sidebar'
import UnoCSS from 'unocss/vite'

export default {
  lang: 'zh',
  title: 'MyDocs',
  description: 'Code',

  vite: {
    plugins: [UnoCSS()]
  },

  themeConfig: {
    siteTitle: 'MyDocs',
    logo: '/logo.jpg',
    outline: [2, 3],
    outlineTitle: 'On this page',
    nav: nav,
    sidebar: sidebar,
    editLink: {
      pattern: 'https://github.com/chidiao/mydocs/tree/main/docs/:path',
      text: 'View on GitHub'
    }
  }
}
