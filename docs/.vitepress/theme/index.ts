import DefaultTheme from 'vitepress/theme'
import DemoContainer from './demoContainer.vue'
import 'uno.css'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('Demo', DemoContainer)
  }
}
