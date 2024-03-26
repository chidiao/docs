const config = {
  nav: { text: 'Code', link: '/code/' },
  sidebar: {
    '/code/': [
      {
        text: 'Code',
        items: [
          { text: 'Color', link: '/code/color' },
          { text: 'Time', link: '/code/time' }
        ]
      },
      {
        text: 'Utils',
        items: [
          { text: 'Git', link: '/code/git' },
          { text: 'i18n', link: '/code/i18n' },
          { text: 'Config', link: '/code/config/' },
          { text: 'DST', link: '/code/dst' },
          { text: '收藏夹', link: '/code/favorite' }
        ]
      }
    ]
  }
}

export default config
