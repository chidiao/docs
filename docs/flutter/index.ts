const config = {
  nav: {
    text: 'Flutter',
    items: [
      { text: 'Dart', link: '/dart/' },
      { text: 'Flutter', link: '/flutter/' },
      { text: 'Packages', link: '/dart/pub/' }
    ]
  },
  sidebar: {
    '/flutter/': [
      {
        text: 'Flutter',
        items: [
          { text: '安装', link: '/flutter/install' },
          { text: '路由', link: '/flutter/route' }
        ]
      },
      {
        text: 'Widgets',
        items: [{ text: 'ListView', link: '/flutter/listview' }]
      }
    ]
  }
}

export default config
