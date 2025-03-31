import path from 'node:path'
import {fileURLToPath} from 'node:url'

import baseConfig from '@emm-ess-configs/eslint-config'
import {includeIgnoreFile} from '@eslint/compat'
import globals from 'globals'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const gitignorePath = path.resolve(__dirname, '.gitignore')

export default [
    includeIgnoreFile(gitignorePath),
    ...baseConfig,
    {
        languageOptions: {
            globals: {
                ...globals.node,
            },
        },
    },
    {
        files: ['*.ts'],
        languageOptions: {
            parserOptions: {
                project: './tsconfig.node.json',
                projectService: true,
            },
        },
    },
]
