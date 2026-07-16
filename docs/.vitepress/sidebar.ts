import type { DefaultTheme } from 'vitepress'

import code from '../code/sidebar'
import win from '../win/sidebar'

import dart from '../dart/sidebar'
import flutter from '../flutter/sidebar'

import js from '../js/sidebar'
import ts from '../ts/sidebar'
import vue from '../vue/sidebar'
import nuxt from '../nuxt/sidebar'

import html from '../html/sidebar'
import css from '../css/sidebar'
import node from '../node/sidebar'

import getx from '../getx/sidebar'
import uni from '../uni/sidebar'
import wx from '../wx/sidebar'

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
  ...wx
}

export default sidebar
