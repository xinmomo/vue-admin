import globals from 'globals'
import vueParser from 'vue-eslint-parser'
import tseslint from 'typescript-eslint'
import pluginVue from 'eslint-plugin-vue'
import vuePrettierConfig from '@vue/eslint-config-prettier'

export default tseslint.config(
  // 基础配置
  {
    files: ['**/*.{js,mjs,cjs,ts,vue}'],
    plugins: {
      vue: pluginVue,
      '@typescript-eslint': tseslint.plugin,
    },
    extends: [
      tseslint.configs.recommended, // TypeScript 推荐规则[3,8](@ref)
      ...pluginVue.configs['flat/recommended'], // Vue 推荐配置[3,8](@ref)
      vuePrettierConfig, // Vue 兼容的 Prettier 配置[6](@ref)
    ],
    languageOptions: {
      parser: vueParser, // 顶层解析器必须为 Vue[6,8](@ref)
      parserOptions: {
        parser: tseslint.parser, // 嵌套 TS 解析器[3,8](@ref)
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
      },
      globals: {
        ...globals.browser,
        ...(process.env.NODE_ENV === 'test' ? { jest: true } : {}),
      },
    },
    rules: {
      // ESLint 核心规则
      'no-var': 'error',
      'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      // TypeScript 规则
      '@typescript-eslint/no-unused-vars': 'error', // 未使用变量报错[16](@ref)
      // Vue 规则
      'vue/multi-word-component-names': 'off', // 关闭组件名多单词限制[6](@ref)
    },
  },
  // 可选：针对特定文件类型覆盖规则
  {
    files: ['**/*.ts'],
    rules: {
      '@typescript-eslint/no-explicit-any': 'off', // 允许 any 类型[8](@ref)
    },
    ignores: ['dist/**', 'node_modules/**'],
  },
)
