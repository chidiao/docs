export function sidebarTs() {
  return [
    {
      text: '数据类型',
      items: [
        { text: '基本类型', link: '/ts/types/' },
        { text: '类型检测', link: '/ts/types/typeof' },
        { text: '类型转换', link: 'ts/types/typetr' },
        { text: 'Number', link: '/ts/types/number' },
        { text: 'String', link: '/ts/types/string' },
        { text: 'Object', link: '/ts/types/object' }
      ]
    },
    {
      text: '扩展类型',
      items: [
        { text: 'Array', link: '/ts/types/array' },
        { text: 'Map', link: '/ts/types/map' },
        { text: 'Set', link: '/ts/types/set' },
        { text: 'Math', link: '/ts/types/math' },
        { text: 'Date', link: '/ts/types/date' },
        { text: 'Interface', link: '/ts/types/interface' }
      ]
    }
  ]
}
