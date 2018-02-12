function echoPromiseDelayed(input, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            resolve(Array(6).join(input + "\n"))
        }, delay)
    })
}

let p = echoPromiseDelayed('hello',500).then(d => console.log(d))