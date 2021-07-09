module.exports = {
  lang: 'zh',
  title: 'chidiao.xin',
  description: '我的文档，学习笔记。',

  themeConfig: {
    nav: [
      { text: 'Vue', link: '/vue/' },
      { text: 'React', link: '/react/' },
      { text: 'JS', link: '/js/' },
      { text: 'CSS', link: '/css/' },
      { text: 'Utils', link: '/utils/' },
      { text: 'Notes', link: '/notes/' },
      { text: 'Gitee', link: 'https://gitee.com/chidiao/mydocs' }
    ],

    sidebar: {
      '/vue/': getVueSidebar(),
      '/js/': getJsSidebar(),
      '/utils/': getUtilsSidebar(),
      '/notes/': getNotesSidebar()
    }
  }
}

function getVueSidebar() {
  return [
    {
      text: 'Vue',
      children: [
        { text: '开始', link: 'vue/' },
        { text: '组件', link: 'vue/component' },
        { text: '指令', link: 'vue/directives' }
      ]
    }
  ]
}

function getReactSidebar() {
  return []
}

function getJsSidebar() {
  return [
    {
      text: 'JavaScript',
      children: [
        { text: '开始', link: 'js/' },
        { text: 'dom', link: 'js/dom' }
      ]
    },
    {
      text: '数据类型',
      children: [
        { text: '开始', link: 'js/type' },
        { text: '数字', link: 'js/type-number' },
        { text: '字符串', link: 'js/type-string' },
        { text: '对象', link: 'js/type-object' },
        { text: '数组', link: 'js/type-array' }
      ]
    }
  ]
}

function getCssSidebar() {
  return []
}

function getUtilsSidebar() {
  return [
    {
      text: '工具',
      children: [
        { text: '编程导航', link: 'utils/' },
        { text: 'axios', link: 'utils/axios' },
        { text: 'lodash', link: 'utils/lodash' },
        { text: 'swiper', link: 'utils/swiper' }
      ]
    }
  ]
}

function getNotesSidebar() {
  return [
    {
      text: '笔记',
      children: [
        { text: '开始', link: 'notes/' },
        { text: 'Git', link: 'notes/git' }
      ]
    },
    {
      text: '其他',
      children: [{ text: '网址导航', link: 'notes/website' }]
    }
  ]
}
