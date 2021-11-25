/**
        * 这个 debounce 函数在给定的时间间隔内只允许你提供的回调函数执行一次，以此降低它的执行频率。
        * @method 防抖函数(设定时间之后出结果，重复点击无效，如果重复点击，从点击的时刻,重新计算时间)
        * @param func 目标函数
        * @param wait 延迟执行毫秒数
      */

export const debounce = (func, wait) => {
    let _lastTime
    return function() {
        clearTimeout(_lastTime)
        _lastTime = setTimeout(() => {
            func.apply(this, arguments)
        }, wait)
    }
}

/**
    * @method 节流函数(设定时间之内只能点击一次，点击后立即触发，重复点击无效，必须等到设定时间执行完才执行第二次)
    * @param func 函数
    * @param wait 延迟执行毫秒数
 */
export const throttle = (func, wait) => {
    if (wait == null || wait == undefined) {
        wait = 3000
    }
    let _lastTime = null
    // 返回新的函数
    return function() {
        let _nowTime = +new Date()
        if (_nowTime - _lastTime > wait || !_lastTime) {
            func.apply(this, arguments) // 将this和参数传给原函数
            _lastTime = _nowTime
        }
    }
}