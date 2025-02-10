import { defineConfig, presetUno, transformerDirectives, transformerVariantGroup } from 'unocss'

export default defineConfig({
  presets: [presetUno()],
  rules: [
    // ["rule-name-here", { "css-property": "css-value" }]
  ],
  shortcuts: [
    // object for non regex shortcuts
    {
      'flex-center': 'flex items-center justify-center',
      'absolute-center': 'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
      'clickable-icon': 'cursor-pointer text-zx-3 transition-all hover:text-zx-4',
    },
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      zx: {
        1: '#eff6ff', // 浅色文字
        2: '#aed2ff',
        3: '#32e4fe',
        4: '#45a2ff',
        5: '#3d6dbc',
        6: '#1d4ed8',
        7: '#172554',
        8: '#051c45',
        9: '#000c29', // 超级深色但不黑
        6.1: '#1e40af',
      },
    },
  },
  // extendTheme: (theme) => {
  //   return {
  //     ...theme,
  //     breakpoints: {
  //       ...theme.breakpoints,
  //       sm: '6120px',
  //       md: '640px',
  //     },
  //   }
  // },
})
