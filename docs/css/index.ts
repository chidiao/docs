const config = {
  nav: {
    text: 'Style',
    items: [
      { text: 'CSS', link: '/css/background/' },
      { text: 'Utils', link: '/css/utils/' },
      { text: 'Demos', link: '/demos/' }
    ]
  },
  sidebar: {
    '/css/utils': [
      {
        text: 'Utils',
        items: [
          { text: 'Assets', link: '/css/utils/' },
          { text: 'Scss', link: '/css/utils/scss' },
          { text: 'EasyLess', link: '/css/utils/easy-less' }
        ]
      }
    ],
    '/css/': [
      {
        text: 'CSS',
        items: [
          { text: 'Selector', link: '/css/selector' },
          { text: 'Background', link: '/css/background/' },
          { text: 'Borders', link: '/css/borders/' },
          { text: 'Filter', link: '/css/filter' },
          { text: 'text', link: '/css/text' },
          { text: 'box', link: '/css/box' },
          { text: 'clip-path', link: '/css/clip-path' },
          { text: 'function', link: '/css/function' },
          { text: 'transform', link: '/css/transform' }
        ]
      },
      {
        text: 'Layout',
        items: [
          { text: 'Position', link: '/css/position' },
          { text: 'Flex', link: '/css/flex' },
          { text: 'Grid', link: '/css/grid' }
        ]
      },
      {
        text: 'Animate',
        items: [{ text: 'animation', link: '/css/animation' }]
      }
    ]
  }
}

export default config
