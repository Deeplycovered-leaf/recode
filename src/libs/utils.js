/* eslint-disable prefer-rest-params */
/* eslint-disable no-eval */
const utilsModule = ((Function) => {
  Function.prototype.myCall = function (ctx) {
    ctx = Object(ctx) || window
    ctx.originFn = this

    // 拿 myCall 第二个参数开始到结束的所有参数作为 test 的实参列表
    const args = []
    for (let i = 1, len = arguments.length; i < len; i++)
      args.push(`arguments[${i}]`)

    // args + 字符串 -> args 展开平铺到 fn 实参中
    // ctx.originFn(arguments[1],arguments[2])
    const res = eval(`ctx.originFn(${args})`)

    delete ctx.originFn

    return res
  }

  Function.prototype.myApply = function (ctx, args) {
    ctx = Object(ctx) || window
    ctx.originFn = this

    if (typeof args !== 'object' && typeof args !== 'function')
      throw new TypeError('CreateListFromArrayLike called on non-object')

    if (!args || typeOf(args) !== 'Array')
      return ctx.originFn()

    // args + 字符串 -> args 展开平铺到 fn 实参中
    // ctx.originFn(arguments[1],arguments[2])
    const res = eval(`ctx.originFn(${args})`)

    delete ctx.originFn

    return res
  }

  function typeOf(value) {
    if (value === null)
      return 'null'

    return typeof (value) === 'object'
      ? {
          '[object Object]': 'Object',
          '[object Array]': 'Array',
          '[object Number]': 'Number',
          '[object String]': 'String',
          '[object Boolean]': 'Boolean',
        }[({}).toString.call(value)]
      : typeof (value)
  }

  Function.prototype.myBind = function (ctx) {
    const originFn = this
    const args = [].slice.call(arguments, 1)
    const _tempFn = function () { }

    const newFn = function () {
      // return new function t arguments list
      const newArgs = [].slice.call(arguments)
      return originFn.apply(this instanceof newFn ? this : ctx, args.concat(newArgs))
    }

    _tempFn.prototype = this.prototype
    newFn.prototype = new _tempFn()

    return newFn
  }

  return {
    typeOf,
  }
})(Function)

export default utilsModule
