import UnoCSS from 'unocss/vite'
import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/ui-csw/',
  vite: {
    plugins: [
      UnoCSS(),
    ],
  },
  title: 'ui-csw',
  description: '一个基于 Vue 3 的轻量级可视化组件库。',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Components', link: '/components/Button' },
      { text: 'Sample', link: '/other/Sample' },
    ],
    sidebar: [
      {
        text: 'Components',
        items: [
          { text: 'Button', link: '/components/Button' },
          { text: 'Border', link: '/components/Border' },
          { text: 'Card', link: '/components/Card' },
          { text: 'Dialog', link: '/components/Dialog' },
          { text: 'Footer', link: '/components/Footer' },
          { text: 'Header', link: '/components/Header' },
          { text: 'Loading', link: '/components/Loading' },
          { text: 'Map', link: '/components/Map' },
          { text: 'Statistic', link: '/components/Statistic' },
          { text: 'Title', link: '/components/Title' },
        ],
      },
      {
        text: 'Other',
        items: [
          { text: 'Sample', link: '/other/Sample' },
          { text: 'api-examples', link: '/other/api-examples' },
          { text: 'markdown-examples', link: '/other/markdown-examples' },
        ],
      },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/cswwww/ui-csw' },
    ],
  },
})
