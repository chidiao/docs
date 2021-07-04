module.exports = {
  lang: 'zh',
  title: 'chidiao.xin',
  description: '我的文档，学习笔记。',

  themeConfig: {
    nav: [
      { text: 'JS', link: '/js/' },
      { text: 'Notes', link: '/notes/' }
    ],

    sidebar: {
      '/js/': getJsSidebar(),
      '/notes/': getNotesSidebar()
    }
  }
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
        { text: '对象', link: 'js/object' },
        { text: '数组', link: 'js/array' }
      ]
    }
  ]
}

function getNotesSidebar() {
  return [
    {
      text: '笔记',
      children: [{ text: '开始', link: 'notes/' }]
    },
    {
      text: '其他',
      children: [{ text: '网址导航', link: 'notes/website' }]
    }
  ]
}
