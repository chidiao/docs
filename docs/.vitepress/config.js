import { containerPreview, componentPreview } from '@vitepress-demo-preview/plugin'

import code from '../code'
import dart from '../dart'
import flutter from '../flutter'
import getx from '../getx'
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
    sidebar: {
      '/code/': code(),
      '/dart/': dart(),
      '/flutter/': flutter(),
      '/getx/': getx(),
      '/css/': css(),
      '/vue/': vue(),
      '/js/': js(),
      '/ts/': ts(),
      '/uni/': uni(),
      '/utils/': utils()
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
        { text: 'GetX', link: '/getx/' }
      ]
    },
    {
      text: 'Web',
      items: [
        { text: 'CSS', link: '/css/' },
        { text: 'Vue', link: '/vue/' },
        { text: 'JavaScript', link: '/js/' },
        { text: 'TypeScript', link: '/ts/types/' },
        { text: 'Uniapp', link: '/uni/' },
        { text: 'Nuxt', link: '/nuxt/' }
      ]
    },
    { text: 'Utils', link: '/utils/' }
  ]
}
