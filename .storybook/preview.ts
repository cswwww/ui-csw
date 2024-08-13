import type { Preview } from '@storybook/vue3'
import '../src/style/main.css'
import '../src/style/font/iconfont.css'
import '../src/style/font/iconfont.js'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  },

  tags: ['autodocs']
}

export default preview
