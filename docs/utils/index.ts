const config = {
  sidebar: {
    '/utils/': [
      {
        text: 'Utils',
        items: [
          { text: 'Axios', link: '/utils/axios' },
          { text: 'Dayjs', link: '/utils/dayjs' },
          { text: 'Clipboard', link: '/utils/clipboard' },
          { text: 'lodash', link: '/utils/lodash' },
          { text: 'swiper', link: '/utils/swiper' },
          { text: 'mock', link: '/utils/mock' },
          { text: 'Gsap', link: '/utils/gsap' },
          { text: 'map', link: '/utils/map' }
        ]
      },
      {
        text: 'Build',
        items: [
          { text: 'Yarn', link: '/utils/node' },
          { text: 'Prettier', link: '/utils/prettier' },
          { text: 'VScode', link: '/utils/vscode' },
          { text: 'Vite', link: '/utils/build/vite' },
          { text: 'Parcel', link: '/utils/build/parcel' }
        ]
      }
    ]
  }
}

export default config
