import { containerPreview, componentPreview } from '@vitepress-demo-preview/plugin'
import code from '../code'
import dart from '../dart'
import flutter from '../flutter'
import pub from '../pub'
import js from '../js'
import ts from '../ts'
import css from '../css'
import uni from '../uni'
import vue from '../vue'
import nuxt from '../nuxt'
import utils from '../utils'

export default {
  lang: 'zh',
  title: 'MyDocs',
  description: 'Code',

  markdown: {
    config(md) {
      md.use(containerPreview)
      md.use(componentPreview)
    }
  },

  themeConfig: {
    siteTitle: 'MyDocs',
    logo: '/logo.jpg',
    outline: [2, 3],
    outlineTitle: 'On this page',
    nav: getNav(),
    sidebar: getSidebar()
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
        { text: 'Pub', link: '/pub/' }
      ]
    },
    {
      text: 'Web',
      items: [
        { text: 'Vue', link: '/vue/' },
        { text: 'JavaScript', link: '/js/' },
        { text: 'TypeScript', link: '/ts/' },
        { text: 'Uniapp', link: '/uni/' }
      ]
    },
    {
      text: 'Nuxt',
      link: '/nuxt/'
    },
    {
      text: 'Style',
      items: [{ text: 'CSS', link: '/css/' }]
    },
    { text: 'Utils', link: '/utils/' }
  ]
}

function getSidebar() {
  const sidebar = {}
  const configs = [code, dart, flutter, pub, vue, js, ts, css, nuxt, uni, utils]
  configs.forEach((config) => {
    Object.assign(sidebar, config.sidebar)
  })

  return sidebar
}
