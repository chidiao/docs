import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import Layout from './Layout.vue'
import Home from './Home.vue'
import DemoContainer from './demoContainer.vue'
import DocFeatures from './DocFeatures.vue'
import 'uno.css'
import './custom.css'

const theme: Theme = {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    app.component('home', Home)
    app.component('Demo', DemoContainer)
    app.component('DocFeatures', DocFeatures)
  }
}

export default theme
