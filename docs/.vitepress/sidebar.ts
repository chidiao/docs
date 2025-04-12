import code from '../code'
import win from '../win'

import dart from '../dart'
import flutter from '../flutter'
import js from '../js'
import ts from '../ts'
import vue from '../vue'
import nuxt from '../nuxt'

import html from '../html'
import css from '../css'

import uni from '../uni'
import wx from '../wx'

export default {
  ...code,
  '/win/': [...win.sidebar],
  ...dart,
  ...flutter,
  ...js,
  ...ts,
  ...vue,
  ...nuxt,
  ...html,
  '/node/': [
    {
      text: 'Node',
      items: [
        { text: 'Node.js', link: '/node/node' },
        { text: 'package.json', link: '/node/package' },
        { text: 'Gulp', link: '/node/gulp' }
      ]
    }
  ],
  '/css/': [...css.sidebar],
  '/uni/': [...uni.sidebar, ...wx.sidebar],
  '/wx/': [...uni.sidebar, ...wx.sidebar]
}
