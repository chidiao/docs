const config = {
  sidebar: {
    '/js/': [
      {
        text: 'JavaScript',
        items: [
          { text: '开始', link: '/js/' },
          { text: 'Bom', link: '/js/dom/bom' },
          { text: 'Dom', link: '/js/dom/dom' },
          { text: 'Event', link: '/js/event' },
          { text: 'Geometry', link: '/js/dom/geometry' },
          { text: 'Storage', link: '/js/storage' },
          { text: 'Async', link: '/js/async' },
          { text: 'Class', link: '/js/class' },
          { text: 'Module', link: '/js/module' },
          { text: 'Function', link: '/js/function' },
          { text: 'Window', link: '/js/window' },
          { text: 'Prototype', link: '/js/prototype' }
        ]
      },
      {
        text: 'Types',
        items: [{ text: 'Number', link: '/js/types/number' }]
      },
      {
        text: 'Extend',
        items: [{ text: 'Math', link: '/js/extend/math' }]
      },
      {
        text: '其他',
        items: [
          { text: '变量', link: '/js/var' },
          { text: '其他', link: '/js/other' },
          { text: '代码段', link: '/js/snippets/' },
          { text: 'Canvas', link: '/js/canvas' },
          { text: 'jQuery', link: '/js/jquery' },
          { text: 'Node.js', link: '/js/node' }
        ]
      }
    ]
  }
}

export default config
