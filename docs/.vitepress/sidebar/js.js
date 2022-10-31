export function sidebarJs() {
  return [
    {
      text: 'JavaScript',
      items: [
        { text: 'start', link: '/js/' },
        { text: 'bom', link: '/js/dom/bom' },
        { text: 'dom', link: '/js/dom/dom' },
        { text: 'event', link: '/js/event' },
        { text: 'geometry', link: '/js/dom/geometry' },
        { text: 'storage', link: '/js/storage' },
        { text: 'async', link: '/js/async' },
        { text: 'class', link: '/js/class' },
        { text: 'module', link: '/js/module' },
        { text: 'function', link: '/js/function' }
      ]
    },
    {
      text: 'Types',
      collapsible: true,
      collapsed: false,
      items: [
        { text: 'Types', link: '/js/types/index' },
        { text: 'String', link: '/js/types/string' },
        { text: 'Number', link: '/js/types/number' },
        { text: 'Object', link: '/js/types/object' },
        { text: 'Array', link: '/js/types/array' },
        { text: 'Map', link: '/js/types/map' },
        { text: 'Set', link: '/js/types/set' }
      ]
    },
    {
      text: 'Other',
      items: [
        { text: 'snippets', link: '/js/snippets/' },
        { text: 'canvas', link: '/js/canvas' },
        { text: 'jquery', link: '/js/jquery' },
        { text: 'mp', link: '/js/mp/qa' },
        { text: 'qa', link: '/js/qa' }
      ]
    }
  ]
}
