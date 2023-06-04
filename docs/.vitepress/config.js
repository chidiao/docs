import { defineConfig } from 'vitepress'
import { css } from '../css'
import { dart } from '../dart'
import { flutter } from '../flutter'
import { js } from '../js'
import { nav } from '../nav'
import { ts } from '../ts'
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

    nav: _nav(),
    sidebar: {
      '/css/': css(),
      '/dart/': dart(),
      '/flutter/': flutter(),
      '/js/': js(),
      '/nav/': nav(),
      '/ts/': ts(),
      '/uni/': uni(),
      '/utils/': utils(),
      '/vue/': vue()
    }
  }
})

function _nav() {
  return [
    {
      text: 'Flutter',
      items: [
        { text: 'Dart', link: '/dart/' },
        { text: 'Flutter', link: '/flutter/' }
      ]
    },
    {
      text: 'Web',
      items: [
        { text: 'Vue', link: '/vue/' },
        { text: 'JavaScript', link: '/js/' },
        { text: 'TypeScript', link: '/ts/' },
        { text: 'CSS', link: '/css/' },
        { text: 'Uniapp', link: '/uni/' }
      ]
    },
    { text: 'Utils', link: '/utils/' },
    { text: 'Nav', link: '/nav/favorite' }
  ]
}
