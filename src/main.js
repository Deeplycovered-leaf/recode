/* eslint-disable new-cap */
/* eslint-disable no-unused-vars */
/* eslint-disable prefer-rest-params */

import utilsModule from './libs/utils'

/**
 * 1. test -> bing() -> test not execute -> return a new function
 * 2. bind -> first argument -> test -> this -> { a: 1 }
 * 3. bing can split test arguments
 *    bind accept part of arguments  return a new function accept part of arguments
 * 4. bing & call arguments via is same
 * 5. new () return function -> this direction test constructor example
 * 6. example should extend test constructor prototype properties
 */
function test(user, car) {
  console.log(`${user}刚买了${car}`)
  console.log(this, arguments)
}

test.prototype.myLove = function () {

}
const t = test.myBind({ a: 1 }, 'zi')
console.log('t =>', t('xiaomi'))
console.log('new t() :>> ', new t('zi'))
