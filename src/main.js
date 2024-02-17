/* eslint-disable prefer-rest-params */
/* eslint-disable no-unused-vars */
import utilsModule from './libs/utils'

/**
 * 1. test -> call() -> test()
 * 2. test -> this -> call 的第一个参数
 * 3. call -> 第二个参数开始 -> test 的参数列表
 */
function test() {
  console.log(this, arguments)

  return 'over'
}

test.myCall({
  a: 1,
  b: 2,
}, 'test1', 'test2')

const obj = {
  a: 1,
  b: 2,
  test() {
    console.log(this)
  },
}

// 对于一个方法来说，谁调用，函数内部的 this 就是指向谁
obj.test()
