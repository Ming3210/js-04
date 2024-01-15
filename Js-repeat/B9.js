let fn1 = 0
let fn2 = 1
let n = prompt("Nhập 1 số")
let sum = 0
while(sum>n){
    for(let i = 3;i<=n;i++){
        let fn = fn1 + fn2
        console.log(fn)
        fn1 = fn2
        fn2 = fn
        sum = sum+fn
        console.log("sum = "+sum)
    }
}