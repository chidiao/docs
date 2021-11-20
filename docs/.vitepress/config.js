module.exports = {
  lang: 'zh-CN',
  title: 'chidiao.xin',
  description: '我的文档，学习笔记。',

  themeConfig: {
    smoothScroll: true,

    nav: [
      { text: 'Vue', link: '/vue/' },
      { text: 'React', link: '/react/' },
      { text: 'Utils', link: '/utils/' },
      { text: 'JS', link: '/js/' },
      { text: 'CSS', link: '/css/' }
    ],

    sidebar: {
      '/vue/': getVueSidebar(),
      '/react/': getReactSidebar(),
      '/utils/': getUtilsSidebar(),
      '/js/': getJsSidebar(),
      '/css/': getCssSidebar(),
      '/qa/': getQASidebar()
    }
  }
}

function getVueSidebar() {
  return [
    {
      text: 'Vue',
      children: [
        { text: '开始', link: '/vue/' },
        { text: '组件', link: '/vue/component' },
        { text: '指令', link: '/vue/directives' },
        { text: '计算属性', link: '/vue/computed' },
        { text: '动画', link: '/vue/transition' },
        { text: 'antdv', link: '/vue/antdv' },
        { text: 'setup', link: '/vue/setup' },
        { text: 'style', link: '/vue/style' }
      ]
    },
    {
      text: 'Router',
      children: [{ text: '开始', link: '/vue/router/' }]
    },
    {
      text: 'Vuex',
      children: [{ text: '开始', link: '/vue/vuex/' }]
    }
  ]
}

function getReactSidebar() {
  return [
    {
      text: 'React',
      children: [
        { text: '开始', link: '/react/' },
        { text: 'hook', link: '/react/hook' }
      ]
    },
    {
      text: '生态',
      children: [
        { text: 'router', link: '/react/router' },
        { text: 'antd', link: '/react/antd' }
      ]
    }
  ]
}

function getUtilsSidebar() {
  return [
    {
      text: '工具',
      children: [
        { text: '开始', link: '/utils/' },
        { text: 'axios', link: '/utils/axios' },
        { text: 'lodash', link: '/utils/lodash' },
        { text: 'swiper', link: '/utils/swiper' },
        { text: 'dayjs', link: '/utils/dayjs' },
        { text: 'mock', link: '/utils/mock' },
        { text: 'gsap', link: '/utils/gsap' },
        { text: 'map', link: '/utils/map' }
      ]
    },
    {
      text: '笔记',
      children: [
        { text: 'Git', link: '/utils/git' },
        { text: 'Yarn', link: '/utils/yarn' },
        { text: '编程导航', link: '/utils/nav' },
        { text: '常用配置', link: '/utils/config' },
        { text: '系统设置', link: '/utils/notes/windows' },
        { text: '收藏夹', link: '/utils/notes/favorite' },
        { text: '项目', link: '/utils/notes/project' }
      ]
    }
  ]
}

function getJsSidebar() {
  return [
    {
      text: 'JavaScript',
      children: [
        { text: '开始', link: '/js/' },
        { text: 'Async', link: '/js/async' },
        { text: 'Module', link: '/js/module' },
        { text: 'Snippets', link: '/js/snippets/' },
        { text: 'Storage', link: '/js/storage' },
        { text: 'Function', link: '/js/function' }
      ]
    },
    {
      text: 'Type',
      children: [
        { text: 'Type', link: '/js/type/index' },
        { text: 'Array', link: '/js/type/array' },
        { text: 'Object', link: '/js/type/object' },
        { text: 'String', link: '/js/type/string' },
        { text: 'Number', link: '/js/type/number' }
      ]
    },
    {
      text: '其他',
      children: [
        { text: 'canvas', link: '/js/canvas' },
        { text: 'Bom', link: '/js/dom/bom' },
        { text: 'Dom', link: '/js/dom/dom' },
        { text: '几何学', link: '/js/dom/geometry' }
      ]
    }
  ]
}

function getCssSidebar() {
  let list = ['animation', 'background', 'box', 'clip-path', 'counter', 'filter', 'flex', 'transition']

  let result = [{ text: '开始', link: '/css/' }]
  list.map((item) => {
    result.push({
      text: item,
      link: `/css/${item}`
    })
  })

  return [
    {
      text: 'CSS',
      children: result
    },
    {
      text: 'Utils',
      children: [
        { text: 'precss', link: '/css/precss' },
        { text: 'postcss', link: '/css/postcss' },
        { text: 'tailwind', link: '/css/tailwind' }
      ]
    }
  ]
}

function getQASidebar() {
  return [
    {
      text: '问题',
      children: [
        { text: '开始', link: '/qa/' },
        { text: 'vue', link: '/qa/vue' },
        { text: 'js', link: '/qa/js' },
        { text: 'css', link: '/qa/css' }
      ]
    }
  ]
}
