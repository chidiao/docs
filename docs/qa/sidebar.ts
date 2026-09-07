import type { DefaultTheme } from 'vitepress'

import code from './code/sidebar.ts'
import css from './css/sidebar.ts'
import feat from './feat/sidebar.ts'
import html from './html/sidebar.ts'
import js from './js/sidebar.ts'
import ts from './ts/sidebar.ts'
import vue from './vue/sidebar.ts'

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