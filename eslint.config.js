import path from 'node:path'
import { fileURLToPath } from 'node:url'
import antfu from '@antfu/eslint-config'
import { FlatCompat } from '@eslint/eslintrc'

// mimic CommonJS variables -- not needed if using CommonJS
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

export default antfu(
  {
    ignores: [
      '**/fixtures',
    // ...globs
    ],
  },
  {
    rules: {
      'no-console': 'off',
      'no-alert': 'off',
      'no-throw-literal': 'off',
    },
  },

  // mimic ESLintRC-style extends
  ...compat.extends('./.eslintrc-auto-import.json'),
)
