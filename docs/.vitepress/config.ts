import code from '../code'
import dart from '../dart'
import demos from '../demos'
import flutter from '../flutter'
import pub from '../pub'
import js from '../js'
import ts from '../ts'
import npm from '../npm'
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
  return [
    { text: 'Code', link: '/code/' },
    {
      text: 'Flutter',
      items: [
        { text: 'Dart', link: '/dart/' },
        { text: 'Flutter', link: '/flutter/' },
        { text: 'Package', link: '/pub/' }
      ]
    },
    {
      text: 'JavaScript',
      items: [
        { text: 'JavaScript', link: '/js/' },
        { text: 'TypeScript', link: '/ts/' },
        { text: 'Package', link: '/npm/' }
      ]
    },
    {
      text: 'Vue',
      items: [
        { text: 'Vue', link: '/vue/' },
        { text: 'Nuxt', link: '/nuxt/' },
        { text: 'Uniapp', link: '/uni/' }
      ]
    },
    {
      text: 'Style',
      items: [
        { text: 'CSS', link: '/css/icons' },
        { text: 'SCSS', link: '/scss/' },
        { text: 'Demos', link: '/demos/' }
      ]
    }
  ]
}

function getSidebar() {
  const sidebar = {}
  const configs = [code, dart, demos, flutter, pub, vue, js, ts, npm, css, nuxt, uni]
  configs.forEach((config) => {
    Object.assign(sidebar, config.sidebar)
  })

  return sidebar
}
