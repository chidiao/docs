import { sidebarVue } from './sidebar/vue'
import { sidebarReact } from './sidebar/react'
import { sidebarJs } from './sidebar/js'
import { sidebarCss } from './sidebar/css'
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
      '/utils/': sidebarUtils(),
      '/js/': sidebarJs(),
      '/css/': sidebarCss(),
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
    { text: 'Vue', link: '/vue/utils/' },
    { text: 'Utils', link: '/utils/' },
    { text: 'JS', link: '/js/types/array' },
    { text: 'CSS', link: '/css/' },
    { text: 'Nav', link: '/nav/favorite' }
  ]
}
