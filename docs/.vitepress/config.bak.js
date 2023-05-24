import { sidebarFlutter } from './sidebar/flutter'
import { sidebarVue } from './sidebar/vue'
import { sidebarReact } from './sidebar/react'
import { sidebarJs } from './sidebar/js'
import { sidebarTs } from './sidebar/ts'
import { sidebarCss } from './sidebar/css'
import { sidebarUni } from './sidebar/uni'
import { sidebarUtils } from './sidebar/utils'
import { sidebarNav } from './sidebar/nav'

export default {
  lang: 'zh-CN',
  title: 'MyDocs',
  description: '我的文档，编程笔记。',

  themeConfig: {
    logo: '/logo.jpg',
    siteTitle: 'MyDocs',
    smoothScroll: true,
    nav: nav(),
    sidebar: {
      '/vue/': sidebarVue(),
      '/react/': sidebarReact(),
      '/js/': sidebarJs(),
      '/ts/': sidebarTs(),
      '/css/': sidebarCss(),
      '/uni/': sidebarUni(),
      '/utils/': sidebarUtils(),
      '/nav/': sidebarNav()
    },
    footer: {
      message: '下边没有了',
      copyright: ''
    }
  }
}

function nav() {
  return [
    { text: 'Flutter', link: '/flutter/env' },
    { text: 'Vue', link: '/vue/' },
    // { text: 'React', link: '/react/' },
    { text: 'JS', link: '/js/' },
    { text: 'TS', link: '/ts/types/' },
    { text: 'CSS', link: '/css/' },
    { text: 'Uni', link: '/uni/' },
    { text: 'Utils', link: '/utils/' },
    { text: 'Nav', link: '/nav/favorite' }
  ]
}
