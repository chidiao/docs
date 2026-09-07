import type { DefaultTheme } from 'vitepress'

import code from './code/sidebar'
import css from './css/sidebar'
import feat from './feat/sidebar'
import html from './html/sidebar'
import js from './js/sidebar'
import ts from './ts/sidebar'
import vue from './vue/sidebar'

const htmlCssSidebar: DefaultTheme.SidebarItem[] = [...html, ...css]

const sidebar: DefaultTheme.Sidebar = {
  '/qa/code/': code,
  '/qa/html/': htmlCssSidebar,
  '/qa/css/': htmlCssSidebar,
  '/qa/feat/': feat,
  '/qa/js/': js,
  '/qa/ts/': ts,
  '/qa/vue/': vue
}

export default sidebar