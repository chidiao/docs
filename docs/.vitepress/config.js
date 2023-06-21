import { defineConfig } from 'vitepress'

import code from '../code'

import { dart } from '../dart'
import { flutter } from '../flutter'
import getx from '../getx'

import { ts } from '../ts'
import { js } from '../js'
import { css } from '../css'
import { uni } from '../uni'
import { utils } from '../utils'
import { vue } from '../vue'

export default defineConfig({
  lang: 'zh',
  title: 'MyDocs',
  description: 'Code',

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
})

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
        { text: 'TypeScript', link: '/ts/' },
        { text: 'Uniapp', link: '/uni/' }
      ]
    },
    { text: 'Utils', link: '/utils/' }
  ]
}
