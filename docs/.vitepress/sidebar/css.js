export function sidebarCss() {
  let css = ['selector', 'animation', 'background', 'box', 'clip-path', 'counter', 'filter', 'transition', 'position']
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
      items: [{ text: '开始', link: '/css/' }, { text: 'Flex', link: '/css/flex' }, ...cssItems]
    },
    {
      text: 'Utils',
      items: [
        { text: 'precss', link: '/css/precss' },
        { text: 'postcss', link: '/css/postcss' },
        { text: 'tailwind', link: '/css/tailwind' },
        { text: 'qa', link: '/css/qa' }
      ]
    }
  ]
}
