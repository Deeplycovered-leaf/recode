/* eslint-disable prefer-rest-params */

import utilsModule from './libs/utils'

/**
 * 1. test -> apply() -> test()
 * 2. apply -> 第二个参数 -> [] -> test 的实参列表
 * 3. apply -> 第二个参数 -> {} fn -> arguments -> length 0
 * 4. apply -> 只取的第二个参数 -> 第三个参数开始到最后忽略
 * 5. apply -> 第二个参数 -> null undefined -> arguments.length 0
 * 6. apply -> 第二个参数 -> 原始值 -> TypeError: CreateListFromArrayLike called on non-object
 */
function test() {
  console.log(this, arguments)

  return 'over'
}

test.myApply({
  a: 1,
  b: 2,
}, [1, 3])

console.log('utilsModule.typeOf() :>> ', utilsModule.typeOf([1, 3]))
