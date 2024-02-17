// eslint.config.js
import antfu from '@antfu/eslint-config'

export default antfu(
  {
    files: ['**/*.js'],
    rules: {
      'no-console': 'off',
    },
  },
)
