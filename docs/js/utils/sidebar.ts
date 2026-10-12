import type { DefaultTheme } from 'vitepress'

export const items: DefaultTheme.SidebarItem[] = [
  {
    text: 'Utils',
    items: [
      { text: 'Nav', link: '/js/utils/' },
      { text: 'Clipboard', link: '/js/utils/clipboard' },
      { text: 'Dayjs', link: '/js/utils/dayjs' },
      { text: 'Gsap', link: '/js/utils/gsap' },
      { text: 'Swiper', link: '/js/utils/swiper' }
    ]
  }
]

export default { '/js/utils/': items } satisfies DefaultTheme.Sidebar
