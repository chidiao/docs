import code from '../code'
import dart from '../dart'
import demos from '../demos'
import flutter from '../flutter'
import js from '../js'
import ts from '../ts'
import vue from '../vue'
import nuxt from '../nuxt'
import uni from '../uni'
import css from '../css'

export default {
  lang: 'zh',
  title: 'MyDocs',
  description: 'Code',

  themeConfig: {
    siteTitle: 'MyDocs',
    logo: '/logo.jpg',
    outline: [2, 3],
    outlineTitle: 'On this page',
    nav: getNav(),
    sidebar: getSidebar(),
    editLink: {
      pattern: 'https://github.com/chidiao/mydocs/tree/main/docs/:path',
      text: 'View on GitHub'
    }
  }
}

function getNav() {
  return [code.nav, flutter.nav, js.nav, vue.nav, css.nav]
}

function getSidebar() {
  const sidebar = {}
  const configs = [code, dart, demos, flutter, vue, js, ts, css, nuxt, uni]
  configs.forEach((config) => {
    Object.assign(sidebar, config.sidebar)
  })

  return sidebar
}
