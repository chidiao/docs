import { defineConfig } from 'unocss'
import presetWind4 from '@unocss/preset-wind4'

export default defineConfig({
  presets: [presetWind4()],
  content: {
    filesystem: ['docs/**/*.{vue,md,ts,js}']
  },
  rules: [],
  shortcuts: {}
})
