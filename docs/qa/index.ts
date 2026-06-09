import js from './js'
import ts from './ts'
import vue from './vue'
import feat from './feat'
import css from './css'

export default {
  '/qa/': [...js, ...ts, ...vue, ...feat, ...css]
}
