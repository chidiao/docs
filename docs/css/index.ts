const config = {
  sidebar: {
    '/css/': [
      {
        text: 'Assets',
        items: [{ text: 'icons', link: '/css/icons' }]
      },
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
