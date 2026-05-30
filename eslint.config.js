import baseConfig from '@emm-ess-configs/eslint-config'
import {addGitIgnore, globals} from '@emm-ess-configs/eslint-config/helper'

export default [
    addGitIgnore(import.meta.dirname),
    ...baseConfig,
    {
        languageOptions: {
            globals: {
                ...globals.node,
            },
        },
        rules: {
            // stylelint uses null for turning off rules
            'unicorn/no-null': 0,
        },
    },
]
