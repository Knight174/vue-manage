module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', 'eslint:recommended', '@vue/prettier'],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'prettier/prettier': [
      // 这里添加一条规则
      'error',
      {
        semi: false, // 不使用分号
        singleQuote: true, // 全部使用单引号
        printWidth: 120 // 标签太长时换行
      }
    ]
  }
}
