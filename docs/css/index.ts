export default {
  sidebar: [
    {
      text: 'CSS',
      items: [
        { text: 'Start', link: '/css/' },
        { text: 'Utils', link: '/css/utils' },
        { text: 'Selector', link: '/css/selector' },
        { text: 'Text', link: '/css/text' },
        { text: 'Borders', link: '/css/borders/' },
        { text: 'box', link: '/css/box' },
        { text: 'clip-path', link: '/css/clip-path' },
        { text: 'function', link: '/css/function' },
        { text: 'transform', link: '/css/transform' },
        { text: 'SafeArea', link: '/css/safe-area' }
      ]
    },
    {
      items: [
        { text: 'Background', link: '/css/background/' },
        { text: 'Filter', link: '/css/filter' },
        { text: 'Mask', link: '/css/mask/' }
      ]
    },
    {
      text: 'Layout',
      items: [
        { text: 'Position', link: '/css/position' },
        {
          text: 'Flex',
          collapsed: true,
          items: [
            { text: 'Index', link: '/css/flex/' },
            { text: 'Container', link: '/css/flex/container' },
            { text: 'Item', link: '/css/flex/item' }
          ]
        },
        {
          text: 'Grid',
          collapsed: true,
          items: [
            { text: 'Index', link: '/css/grid/' },
            { text: 'Container', link: '/css/grid/container' },
            { text: 'Item', link: '/css/grid/item' }
          ]
        }
      ]
    },
    {
      text: 'Animate',
      items: [{ text: 'animation', link: '/css/animation' }]
    },
    {
      text: 'More',
      items: [{ text: 'Scss', link: '/css/scss' }]
    }
  ]
}
