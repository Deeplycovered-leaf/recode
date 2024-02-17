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
})(Function)

export default utilsModule
