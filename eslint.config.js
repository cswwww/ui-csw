import antfu from '@antfu/eslint-config'

export default antfu({
  ignores: [
    '**/fixtures',
    // ...globs
  ],
}, {
  rules: {
    'no-console': 'off',
    'no-alert': 'off',
    'no-throw-literal': 'off',
  },
})
