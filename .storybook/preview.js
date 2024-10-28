/** @type { import('@storybook/vue3').Preview } */
import '../src/style/main.css'

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  tags: ['autodocs'],
}

export default preview
