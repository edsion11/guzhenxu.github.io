function debounce(fn,interval) {
    let timer = null;
    return function (value) {
        clearTimeout(timer)
        timer = setTimeout(()=>{
            fn.apply(this,arguments)
        },interval)
    }
}
