module.exports = {
  lang: 'zh-CN',
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
      {
        text: 'More',
        items: getNavSidebar()[0].children
      }
    ],

    sidebar: {
      '/vue/': getVueSidebar(),
      '/js/': getJsSidebar(),
      '/css/': getCssSidebar(),
      '/utils/': getUtilsSidebar(),
      '/notes/': getNotesSidebar(),
      '/other/': getNavSidebar()
    }
  }
}

function getNavSidebar() {
  return [
    {
      text: '其他',
      children: [
        { text: '网址导航', link: 'other/websites' },
        { text: '装机必备', link: 'other/windows' },
        { text: '项目经验', link: 'other/projects' },
        { text: '单词本', link: 'other/words' },
        // { text: '面试题', link: 'other/qa' }
      ]
    }
  ]
}

function getVueSidebar() {
  return [
    {
      text: 'Vue',
      children: [
        { text: '开始', link: 'vue/' },
        { text: '组件', link: 'vue/component' },
        { text: '指令', link: 'vue/directives' },
        { text: '计算属性', link: 'vue/computed' },
        { text: '样式', link: 'vue/style' },
        { text: '动画', link: 'vue/transition' }
      ]
    },
    {
      text: 'Router',
      children: [{ text: '开始', link: 'vue/router/' }]
    },
    {
      text: 'Vuex',
      children: [{ text: '开始', link: 'vue/vuex/' }]
    },
    {
      text: '其他',
      children: [
        { text: 'antdv', link: 'vue/antdv' },
        { text: 'vite', link: 'vue/vite' },
        { text: 'vue3', link: 'vue/composition' }
      ]
    }
  ]
}

function getReactSidebar() {
  return [
    {
      text: 'React',
      children: [
        { text: '开始', link: 'react/' },
        { text: 'hook', link: 'react/hook' }
      ]
    },
    {
      text: '生态',
      children: [
        { text: 'router', link: 'react/router' },
        { text: 'antd', link: 'react/antd' }
      ]
    }
  ]
}

function getJsSidebar() {
  return [
    {
      text: 'JavaScript',
      children: [
        { text: '开始', link: 'js/' },
        { text: 'async', link: 'js/async' },
        { text: 'module', link: 'js/module' }
      ]
    },
    {
      text: 'Snippets',
      children: [
        { text: '开始', link: 'js/snippets/' },
        { text: 'Browser', link: 'js/snippets/browser' },
        { text: 'Function', link: 'js/snippets/function' }
      ]
    },
    {
      text: 'Dom',
      children: [
        { text: '开始', link: 'js/dom/' },
        { text: '几何学', link: 'js/dom/geometry' }
      ]
    },
    {
      text: '数据类型',
      children: [
        { text: 'Type', link: 'js/type/index' },
        { text: 'Array', link: 'js/type/array' },
        { text: 'Object', link: 'js/type/object' },
        { text: 'String', link: 'js/type/string' },
        { text: 'Number', link: 'js/type/number' }
      ]
    },
    {
      text: '其他',
      children: [{ text: 'canvas', link: 'js/canvas' }]
    }
  ]
}

function getCssSidebar() {
  let list = ['animation', 'background', 'box', 'clip-path', 'counter', 'filter', 'flex', 'transition']

  let result = [{ text: '开始', link: 'css/' }]
  list.map((item) => {
    result.push({
      text: item,
      link: `css/${item}`
    })
  })

  return [
    {
      text: 'CSS',
      children: result
    },
    {
      text: 'Code',
      children: [
        { text: 'var', link: 'css/var' },
        { text: 'scss', link: 'css/scss' },
        { text: 'less', link: 'css/less' },
        { text: 'rem', link: 'css/rem' },
        { text: 'postcss', link: 'css/postcss' }
      ]
    }
  ]
}

function getUtilsSidebar() {
  return [
    {
      text: '工具',
      children: [
        { text: '开始', link: 'utils/' },
        { text: 'axios', link: 'utils/axios' },
        { text: 'lodash', link: 'utils/lodash' },
        { text: 'swiper', link: 'utils/swiper' },
        { text: 'dayjs', link: 'utils/dayjs' },
        { text: 'mock', link: 'utils/mock' },
        { text: 'gsap', link: 'utils/gsap' },
        { text: 'aos', link: 'utils/aos' },
        { text: 'map', link: 'utils/map' }
      ]
    },
    {
      text: 'uniapp',
      children: [
        { text: 'uniapp', link: 'utils/uniapp' },
        { text: 'uniui', link: 'utils/uniui' },
        { text: 'uview', link: 'utils/uview' }
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
        { text: 'Git', link: 'notes/git' },
        { text: 'Yarn', link: 'notes/yarn' },
        { text: 'Config', link: 'notes/config' }
      ]
    },
    {
      text: '其他',
      children: [
        { text: 'standard', link: 'notes/standard' },
        { text: 'windows', link: 'notes/windows' }
      ]
    }
  ]
}
