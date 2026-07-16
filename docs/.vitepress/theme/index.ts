import DefaultTheme from 'vitepress/theme'
import DemoContainer from './demoContainer.vue'
import DocFeatures from './DocFeatures.vue'
import 'uno.css'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('Demo', DemoContainer)
    app.component('DocFeatures', DocFeatures)
  }
}
