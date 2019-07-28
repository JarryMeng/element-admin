module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 缩进使用不做限制
    // 'indent': 0,
    // 允许使用分号
    // 'semi': [0, 'never'],
    // 允许使用==
    // 'eqeqeq': 0,
    // 允许使用tab
    'no-tabs': 0,
    // 不要求块内空格填充格式
    'padded-blocks': 0,
    // 不允许使用var变量
    'no-var': 2,
    // 对象字面量的键值空格风格
    'key-spacing': 2,
    // 不允许重复声明变量
    'no-redeclare': [2, {
      builtinGlobals: true
    }],
    // 不允许出现多个空格
    // 'no-multi-spaces': ["error", { ignoreEOLComments: true }],
    // 允许箭头函数不使用圆括号
    // 'arrow-parens': 0,
    // 函数圆括号之前 1个 没有空格
    'space-before-function-paren': [1, "never"],
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
