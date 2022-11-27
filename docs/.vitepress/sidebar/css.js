export function sidebarCss() {
  let css = ['box', 'clip-path', 'filter', 'transition', 'position']
  let cssItems = []
  css.map((item) => {
    cssItems.push({
      text: item,
      link: `/css/${item.toLowerCase()}`
    })
  })

  return [
    {
      text: 'CSS',
      items: [
        { text: 'Start', link: '/css/' },
        { text: 'Selector', link: '/css/selector' },
        { text: 'Flex', link: '/css/flex' },
        { text: 'Background', link: '/css/background' },
        { text: 'Border', link: '/css/border' },
        { text: 'Text', link: '/css/text' },
        ...cssItems
      ]
    },
    {
      text: 'Utils',
      items: [
        { text: 'Function', link: '/css/function' },
        { text: 'Animate', link: '/css/animate' },
        { text: 'Tailwind', link: '/css/tailwind' },
        { text: 'precss', link: '/css/precss' },
        { text: 'postcss', link: '/css/postcss' },
        { text: 'qa', link: '/css/qa' }
      ]
    }
  ]
}
