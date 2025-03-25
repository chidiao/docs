import code from '../code'
import dart from '../dart'
import flutter from '../flutter'
import js from '../js'
import ts from '../ts'
import vue from '../vue'
import nuxt from '../nuxt'
import uni from '../uni'
import html from '../html'
import css from '../css'

export default {
  ...code,
  ...dart,
  ...flutter,
  ...js,
  ...ts,
  ...vue,
  ...nuxt,
  ...uni,
  ...html,
  ...css,
  '/node/': [
    {
      text: 'Node',
      items: [
        { text: 'Node.js', link: '/node/node' },
        { text: 'package.json', link: '/node/package' },
        { text: 'Gulp', link: '/node/gulp' }
      ]
    }
  ]
}
