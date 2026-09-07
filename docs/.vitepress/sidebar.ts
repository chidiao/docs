import type { DefaultTheme } from 'vitepress'

import code from '../code/sidebar.ts'
import win from '../win/sidebar.ts'

import dart from '../dart/sidebar.ts'
import flutter from '../flutter/sidebar.ts'

import js from '../js/sidebar.ts'
import ts from '../ts/sidebar.ts'
import vue from '../vue/sidebar.ts'
import nuxt from '../nuxt/sidebar.ts'

import html from '../html/sidebar.ts'
import css from '../css/sidebar.ts'
import node from '../node/sidebar.ts'

import getx from '../getx/sidebar.ts'
import uni from '../uni/sidebar.ts'
import wx from '../wx/sidebar.ts'

import qa from '../qa/sidebar.ts'

const sidebar: DefaultTheme.Sidebar = {
  ...code,
  ...win,
  ...dart,
  ...flutter,
  ...js,
  ...ts,
  ...vue,
  ...nuxt,
  ...html,
  ...node,
  ...css,
  ...getx,
  ...uni,
  ...wx,
  ...qa
}

export default sidebar
