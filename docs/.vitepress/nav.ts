import type { DefaultTheme } from 'vitepress'

const nav: DefaultTheme.NavItem[] = [
  { text: 'Code', link: '/code/' },
  {
    text: '语言基础',
    items: [
      { text: 'JavaScript', link: '/js/' },
      { text: 'TypeScript', link: '/ts/' },
      { text: 'HTML', link: '/html/video' },
      { text: 'CSS', link: '/css/' }
    ]
  },
  {
    text: 'Web 前端',
    items: [
      { text: 'Vue', link: '/vue/v-for-if' },
      { text: 'Nuxt', link: '/nuxt/' },
      { text: 'React', link: '/react/' },
      { text: 'JS 扩展', link: '/js/utils/' },
      { text: 'Node', link: '/node/gulp' }
    ]
  },
  {
    text: '跨端开发',
    items: [
      { text: 'Flutter', link: '/flutter/' },
      { text: 'UniApp', link: '/uni/' }
    ]
  },
  { text: '收藏夹', link: '/nav/' }
]

export default nav
