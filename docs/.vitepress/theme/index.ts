import DefaultTheme from 'vitepress/theme'
import DemoContainer from './demoContainer.vue'
import './tailwind.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('Demo', DemoContainer)
  }
}
