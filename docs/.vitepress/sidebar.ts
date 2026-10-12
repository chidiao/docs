import type { DefaultTheme } from 'vitepress'

import js from '../js/sidebar.ts'
import ts from '../ts/sidebar.ts'
import html from '../html/sidebar.ts'
import css from '../css/sidebar.ts'

import vue from '../vue/sidebar.ts'
import nuxt from '../nuxt/sidebar.ts'
import react from '../react/sidebar.ts'
import node from '../node/sidebar.ts'

import flutter from '../flutter/sidebar.ts'
import uni from '../uni/sidebar.ts'

import code from '../code/sidebar.ts'

import me from '../me/sidebar.ts'
import skills from '../skills/sidebar.ts'
import qa from '../qa/sidebar.ts'

const sidebar: DefaultTheme.Sidebar = {
  ...js,
  ...ts,
  ...html,
  ...css,
  ...vue,
  ...nuxt,
  ...react,
  ...node,
  ...flutter,
  ...uni,
  ...code,
  ...me,
  ...skills,
  ...qa
}

export default sidebar
