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
    { text: 'Vue', link: '/vue/' },
    { text: 'Utils', link: '/utils/' },
    { text: 'JS', link: '/js/type/array' },
    { text: 'CSS', link: '/css/' },
    { text: 'Nav', items: dropNav() }
  ]
}

function dropNav() {
  return [
    { text: 'Windows', link: '/nav/windows' },
    { text: '收藏夹', link: '/nav/favorite' },
    { text: '项目', link: '/nav/project' }
  ]
}

function sidebarVue() {
  return [
    {
      text: 'Vue',
      collapsible: true,
      items: [
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
      items: [{ text: '开始', link: '/vue/router/' }]
    },
    {
      text: 'Pinia',
      items: [
        { text: '开始', link: '/vue/pinia/' },
        { text: 'vuex', link: '/vue/pinia/vuex' }
      ]
    }
  ]
}

function sidebarReact() {
  return [
    {
      text: 'React',
      items: [
        { text: '开始', link: '/react/' },
        { text: 'hook', link: '/react/hook' }
      ]
    }
  ]
}

function sidebarUtils() {
  return [
    {
      text: 'Utils',
      items: [
        { text: 'axios', link: '/utils/axios' },
        { text: 'lodash', link: '/utils/lodash' },
        { text: 'swiper', link: '/utils/swiper' },
        { text: 'dayjs', link: '/utils/dayjs' },
        { text: 'mock', link: '/utils/mock' },
        { text: 'gsap', link: '/utils/gsap' },
        { text: 'map', link: '/utils/map' },
        { text: 'git', link: '/utils/git' },
        { text: 'yarn', link: '/utils/yarn' },
        { text: 'config', link: '/utils/config' }
      ]
    }
  ]
}

function sidebarJs() {
  return [
    {
      text: 'JavaScript',
      items: [
        { text: 'Async', link: '/js/async' },
        { text: 'Module', link: '/js/module' },
        { text: 'Snippets', link: '/js/snippets/' },
        { text: 'Storage', link: '/js/storage' },
        { text: 'Function', link: '/js/function' }
      ]
    },
    {
      text: 'Type',
      items: [
        { text: 'Type', link: '/js/type/index' },
        { text: 'Array', link: '/js/type/array' },
        { text: 'Object', link: '/js/type/object' },
        { text: 'String', link: '/js/type/string' },
        { text: 'Number', link: '/js/type/number' }
      ]
    },
    {
      text: '其他',
      items: [
        { text: 'canvas', link: '/js/canvas' },
        { text: 'Bom', link: '/js/dom/bom' },
        { text: 'Dom', link: '/js/dom/dom' },
        { text: '几何学', link: '/js/dom/geometry' },
        { text: 'this', link: '/js/this' }
      ]
    }
  ]
}

function sidebarCss() {
  let css = ['animation', 'background', 'box', 'clip-path', 'counter', 'filter', 'flex', 'transition']
  let cssItems = [{ text: '开始', link: '/css/' }]
  css.map((item) => {
    cssItems.push({
      text: item,
      link: `/css/${item}`
    })
  })

  return [
    {
      text: 'CSS',
      items: cssItems
    },
    {
      text: 'Utils',
      items: [
        { text: 'precss', link: '/css/precss' },
        { text: 'postcss', link: '/css/postcss' },
        { text: 'tailwind', link: '/css/tailwind' }
      ]
    }
  ]
}

function sidebarNav() {
  return [
    {
      text: '导航',
      items: [
        { text: '编程导航', link: '/utils/nav' },
        { text: '常用配置', link: '/utils/config' },
        { text: '系统设置', link: '/nav/windows' },
        { text: '收藏夹', link: '/nav/favorite' },
        { text: '项目', link: '/nav/project' }
      ]
    }
  ]
}

function sidebarQa() {
  return [
    {
      text: '问题',
      items: [
        { text: '开始', link: '/qa/' },
        { text: 'vue', link: '/qa/vue' },
        { text: 'uni', link: '/qa/uni' },
        { text: 'js', link: '/qa/js' },
        { text: 'css', link: '/qa/css' }
      ]
    }
  ]
}
