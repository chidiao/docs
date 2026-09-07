import type { DefaultTheme } from 'vitepress'

export const qaNav: DefaultTheme.NavItem[] = [
  { text: 'Code', link: '/qa/code/' },
  {
    text: 'WEB',
    items: [
      { text: 'HTML', link: '/qa/html/' },
      { text: 'CSS', link: '/qa/css/' }
    ]
  },
  { text: 'JavaScript', link: '/qa/js/var' },
  { text: 'TypeScript', link: '/qa/ts/' },
  { text: 'Vue', link: '/qa/vue/' },
  { text: 'Feature', link: '/qa/feat/sse' }
]
