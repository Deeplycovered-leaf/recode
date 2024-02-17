const utilsModule = ((Function) => {
  Function.prototype.myCall = function () {
    console.log('my call :>> ')
  }
})(Function)

export default utilsModule
